import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { FormattedMessage } from 'react-intl';
import injectIntl from '../utils/injectIntl';

import Header from '../components/Header';
import Question from '../components/Question';
import Summary from '../components/Summary';
import ProgressBar from '../components/ProgressBar';
import { sparseChoiceShape } from '../components/Choice';

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
 * @param {object} base            The re-base instance.
 * @param {number} score           The high score to be stored.
 * @param {string} uid             The unique ID of the current user.
 * @param {string} genericEndpoint The endpoint for all scores in this game
 *                                 mode. Typically "easy", "medium", etc.
 * @param {string} challengeId     The unique challenge ID, or null.
 *
 * Returns a Promise which wraps the update promises.
 */
const updateHighScore = (base, score, uid, genericEndpoint, challengeId) => {
  const data = { score, at: new Date().getTime(), who: getPlayerName() };
  const promises = [];

  if (setScore(genericEndpoint, score)) {
    promises.push(base.update(lbEndpoint(genericEndpoint, uid), { data }));
  }

  if (challengeId && setScore(challengeId, score)) {
    promises.push(base.update(lbEndpoint(challengeId, uid), { data }));
  }

  return Promise.all(promises);
};

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      attemptsRemaining: null,
      answeredQuestions: [],
      bestScore: 0,
      correctChoices: 0
    };

    this.handleQuestionChoice = this.handleQuestionChoice.bind(this);
    this.handleRestartGame = this.handleRestartGame.bind(this);
  }

  componentDidMount() {
    this.handleRestartGame();

    authenticate(this.props.base, ({ uid }) => this.setState({ uid }));
  }

  gameState() {
    return {
      correctChoices: this.state.correctChoices,
      answeredQuestions: this.state.answeredQuestions
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

    const question = questionFromChoices(choices, this.context.intl);

    const nextState = {
      answeredQuestions: [],
      correctChoices: 0,
      availableChoices: choices.slice(2),
      currentQuestion: question,
      attemptsRemaining: this.props.mode.attempts
    };

    this.setState(nextState);
    window.scrollTo(0, 0);
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
  handleQuestionChoice(choice, immediate) {
    const lastQuestion = this.state.currentQuestion;
    let attemptsRemaining = this.state.attemptsRemaining;

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
          this.props.mode.endpoint,
          this.props.challengeId
        );
      }
    } else {
      attemptsRemaining -= 1;
    }

    let resolveChangeQuestion;

    const changeQuestionPromise = new Promise((resolve) => {
      resolveChangeQuestion = resolve;
    });

    window.setTimeout(() => {
      const question = questionFromChoices(
        this.state.availableChoices, this.context.intl
      );

      const availableChoices = this.state.availableChoices.slice(2);

      // Push the unchosen choice back onto the list for later.
      availableChoices.push(
        this.state.currentQuestion.choices.find(other => other !== choice)
      );

      const answeredQuestions = [
        { selected: choice, ...lastQuestion },
        ...this.state.answeredQuestions
      ];

      this.setState({
        currentQuestion: question,
        answeredQuestions,
        attemptsRemaining,
        availableChoices
      });

      window.scroll({ top: 0, left: 0, behavior: 'smooth' });

      resolveChangeQuestion();
    }, immediate ? 0 : NEXT_QUESTION_WAIT);

    // Consider the choice completed only once we have received a response from
    // ETEngine and the state has been changed so as to display the next
    // question.
    return changeQuestionPromise;
  }

  render() {
    let content;
    let lastChoice;

    if (this.state.answeredQuestions.length) {
      lastChoice = this.state.answeredQuestions[0].selected;
    }

    const showQuestion = this.state.currentQuestion && (
      !lastChoice || // First question to be shown.
      lastChoice.isCorrect ||
      this.state.attemptsRemaining > 0
    );

    if (showQuestion) {
      content = (
        <main className="question-wrapper">
          <ReactCSSTransitionGroup
            component="div"
            transitionName={{ enter: 'fadeInUp', leave: 'fadeOutUp' }}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            <div
              className="animated question-animated"
              key={this.state.currentQuestion.name}
            >
              <Question
                onChoiceMade={this.handleQuestionChoice}
                {...this.state.currentQuestion}
              />
            </div>
          </ReactCSSTransitionGroup>
        </main>
      );
    } else if (lastChoice) {
      content = (
        <Summary
          base={this.props.base}
          challengeId={this.props.challengeId}
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
        <Header>
          <span className="correct-count">
            {this.state.correctChoices}
          </span>{' '}
          <FormattedMessage id="game.correct" />
        </Header>
        {this.props.mode.attempts > 1 ?
          <ProgressBar
            current={this.props.mode.attempts - this.state.attemptsRemaining}
            total={this.props.mode.attempts}
          /> :
          null}
        {content}
      </div>
    );
  }
}

Game.defaultProps = { challengeId: null };

Game.propTypes = {
  base: PropTypes.shape({
    auth: PropTypes.func.isRequired,
    onAuth: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
  }).isRequired,
  challengeId: PropTypes.string,
  choices: PropTypes.arrayOf(sparseChoiceShape),
  mode: PropTypes.shape({
    attempts: PropTypes.number.isRequired,
    endpoint: PropTypes.string.isRequired
  })
};

export default injectIntl(Game, { withRef: true });
