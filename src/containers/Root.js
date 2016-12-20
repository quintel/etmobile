import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Question from '../components/Question';
import Summary from '../components/Summary';

import authenticate from '../utils/authenticate';
import questionFromChoices from '../utils/questionFromChoices';
import { setScore } from '../utils/highScore';
import { getPlayerName } from '../utils/playerName';

const NEXT_QUESTION_WAIT = process.env.NODE_ENV === 'test' ? 1 : 2000;

/**
 * Returns the path to the Firebase endpoint for a leaderboard.
 *
 * @param  {string} leaderboard The leaderboard name; "all" or the challenge ID.
 * @param  {string} uid         The unique ID of the current user.
 * @return {string}             The full leaderboard endpoint path.
 */
const lbEndpoint = (leaderboard, uid) => (
  `/leaderboards/${leaderboard}/${uid}`
);

/**
 * Updates Firebase with a new high-score.
 *
 * @param {object} base        The re-base instance.
 * @param {number} score       The high score to be stored.
 * @param {string} uid         The unique ID of the current user.
 * @param {string} challengeId The unique challenge ID, or null.
 *
 * Returns a Promise which wraps the update promises.
 */
const updateHighScore = (base, score, uid, challengeId) => {
  const data = { score, at: new Date().getTime(), who: getPlayerName() };
  const promises = [];

  if (setScore('all', score)) {
    promises.push(base.update(lbEndpoint('all', uid), { data }));
  }

  if (challengeId && setScore(challengeId, score)) {
    promises.push(base.update(lbEndpoint(challengeId, uid), { data }));
  }

  return Promise.all(promises);
};

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      correctChoices: 0,
      bestScore: 0,
      lastChoice: null,
      scenarioID: undefined,
      queryResults: {}
    };

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleQuestionChoice = this.handleQuestionChoice.bind(this);
    this.handleRestartGame = this.handleRestartGame.bind(this);
    this.createScenarioPromise = null;
  }

  componentDidMount() {
    this.handleRestartGame();

    authenticate(this.props.base, ({ uid }) => this.setState({ uid }));

    // If this is the first time this instance has been mounted, create a new
    // ETEngine scenario to which we'll send inputs selected by the visitor.
    if (!this.createScenarioPromise) {
      this.createScenarioPromise = this.props.api.createScenario();

      this.createScenarioPromise.then(({ scenario: { id } }) => {
        this.setState({ scenarioID: id });

        // ETEngine API does not support fetching queries when creating a
        // request (yet), so we must make a second one.
        return this.fetchQueries(id);
      });
    }
  }

  /**
   * Calls ETEngine with inputs from the choice selected by the visitor and
   * returns Gquery results required to render the dashboard.
   *
   * This is called immediately after creating the scenario after the component
   * is mounted, and every time the visitor makes a choice.
   *
   * @param {number} scenarioId The ID of the active ETEngine scenario.
   * @param {object} inputKeys Keys and values of inputs to be sent to ETEngine.
   *
   * @return {Promise} A promise which will resolve when the ETEngine request
   *                   completes.
   */
  fetchQueries(scenarioID, inputKeys = {}) {
    return this.props.api.updateScenario(
      scenarioID,
      inputKeys,
      this.props.dashboard.map(item => item.query).filter(query => query)
    ).then((data) => {
      this.setState({
        scenarioID: data.scenario.id,
        queryResults: data.gqueries
      });
    });
  }

  gameState() {
    return {
      correctChoices: this.state.correctChoices,
      lastQuestion: this.state.lastQuestion,
      lastChoice: this.state.lastChoice
    };
  }

  /**
   * Restarts the game after a visitor got a question incorrect.
   */
  handleRestartGame() {
    let choices = this.props.choices;

    if (this.state.currentQuestion && this.state.availableChoices.length > 1) {
      // Visitor got a question wrong; don't restart from the beginning, but
      // pick up with the next question.
      choices = this.state.availableChoices;
    }

    const question = questionFromChoices(choices);

    const nextState = {
      lastChoice: null,
      lastQuestion: null,
      correctChoices: 0,
      availableChoices: choices.slice(2),
      currentQuestion: question
    };

    this.setState(nextState);
  }

  /**
   * Starts a scenario update, sending the given inputs to ETEngine.
   */
  handleUpdateInput(inputs) {
    return this.createScenarioPromise.then(
      ({ scenario: { id } }) => this.fetchQueries(id, inputs)
    );
  }

  /**
   * Event triggered when the visitor makes a choice. Coordinates sending the
   * values to ETEngine, updating the game state, and proceeding to the next
   * question or results page.
   *
   * @param {object} choice The choice selected by the visitor.
   *
   * @return {Promise} A promise which resolves when the inputs have been
   *                   updated and the next question has loaded.
   */
  handleQuestionChoice(choice) {
    const updatePromise = this.handleUpdateInput(choice.inputs);
    const lastQuestion = this.state.currentQuestion;

    if (choice.isCorrect) {
      const nextState = { correctChoices: this.state.correctChoices + 1 };

      if (this.state.correctChoices + 1 > this.state.bestScore) {
        nextState.bestScore = nextState.correctChoices;
      }

      this.setState(nextState);

      // Update leaderboards!
      if (nextState.hasOwnProperty('bestScore') && this.state.uid) {
        updateHighScore(
          this.props.base,
          nextState.bestScore,
          this.state.uid,
          this.props.params.challengeId
        );
      }
    }

    let resolveChangeQuestion;

    const changeQuestionPromise = new Promise((resolve) => {
      resolveChangeQuestion = resolve;
    });

    window.setTimeout(() => {
      const question = questionFromChoices(this.state.availableChoices);
      const availableChoices = this.state.availableChoices.slice(2);

      // Push the unchosen choice back onto the list for later.
      availableChoices.push(
        this.state.currentQuestion.choices.find(other => other !== choice)
      );

      this.setState({
        lastChoice: choice,
        lastQuestion: lastQuestion,
        currentQuestion: question,
        availableChoices
      });

      window.scroll({ top: 0, left: 0, behavior: 'smooth' });

      resolveChangeQuestion();
    }, NEXT_QUESTION_WAIT);

    // Consider the choice completed only once we have received a response from
    // ETEngine and the state has been changed so as to display the next
    // question.
    return Promise.all([updatePromise, changeQuestionPromise]);
  }

  render() {
    let content;
    const lastChoice = this.state.lastChoice;

    if ((!lastChoice || lastChoice.isCorrect) && this.state.currentQuestion) {
      content = (
        <div>
          <main className="question-wrapper">
            <ReactCSSTransitionGroup
              component="div"
              transitionName={{ enter: 'fadeInUp', leave: 'fadeOutUp' }}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <div
                className="animated"
                style={{ position: 'absolute' }}
                key={this.state.currentQuestion.name}
              >
                <Question
                  onChoiceMade={this.handleQuestionChoice}
                  {...this.state.currentQuestion}
                />

                <footer>
                  <span className="correct-count">
                    {this.state.correctChoices}
                  </span>
                  correct
                </footer>
              </div>
            </ReactCSSTransitionGroup>
          </main>
        </div>
      );
    } else if (lastChoice) {
      content = (
        <Summary
          base={this.props.base}
          challengeId={this.props.params.challengeId}
          gameState={this.gameState()}
          onRestartGame={this.handleRestartGame}
          uid={this.state.uid}
        />
      );
    } else {
      // Initial render state; prior to handleRestartGame creating the first
      // question.
      content = <p>Please wait...</p>;
    }

    return (
      <div>
        <Header />
        {content}
      </div>
    );
  }
}

Root.defaultProps = {
  params: { challengeId: null }
};

Root.propTypes = {
  api: PropTypes.shape({
    createScenario: PropTypes.func.isRequired,
    updateScenario: PropTypes.func.isRequired
  }).isRequired,
  base: PropTypes.shape({
    auth: PropTypes.func.isRequired,
    onAuth: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
  }).isRequired,
  choices: Question.propTypes.choices,
  dashboard: Dashboard.propTypes.items,
  params: PropTypes.shape({ challengeId: PropTypes.string }).isRequired
};

export default Root;
