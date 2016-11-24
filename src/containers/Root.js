import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Dashboard from '../components/Dashboard';
import Question from '../components/Question';
import Summary from '../components/Summary';

import questionFromChoices from '../utils/questionFromChoices';

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      correctChoices: 0,
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
      lastChoice: this.state.lastChoice
    };
  }

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
      correctChoices: 0,
      availableChoices: choices.slice(2),
      currentQuestion: question
    };

    this.setState(nextState);
  }

  handleUpdateInput(inputs) {
    return this.createScenarioPromise.then(
      ({ scenario: { id } }) => this.fetchQueries(id, inputs)
    );
  }

  handleQuestionChoice(choice) {
    const updatePromise = this.handleUpdateInput(choice.inputs);

    if (choice.isCorrect) {
      this.setState({ correctChoices: this.state.correctChoices + 1 });
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
        currentQuestion: question,
        availableChoices
      });

      resolveChangeQuestion();
    }, 2000);

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
          gameState={this.gameState()}
          onRestartGame={this.handleRestartGame}
        />
      );
    } else {
      // Initial render state; prior to handleRestartGame creating the first
      // question.
      content = <p>Please wait...</p>;
    }

    return (
      <div>
        <header>ETMobile - Reduce your CO2 emissions</header>
        {content}
      </div>
    );
  }
}

Root.propTypes = {
  api: PropTypes.shape({
    createScenario: PropTypes.func.isRequired,
    updateScenario: PropTypes.func.isRequired
  }).isRequired,
  choices: Question.propTypes.choices,
  dashboard: Dashboard.propTypes.items
};

export default Root;
