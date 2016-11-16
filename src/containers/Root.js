import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Dashboard from '../components/Dashboard';
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';
import Summary from '../components/Summary';

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      currentQuestion: 0,
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
    const nextState = { lastChoice: null, correctChoices: 0 };

    if (this.state.currentQuestion === this.props.questions.length) {
      nextState.currentQuestion = 0;
    }

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
      this.setState({
        lastChoice: choice,
        currentQuestion: this.state.currentQuestion + 1
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

    if ((!lastChoice || lastChoice.isCorrect) &&
        this.props.questions[this.state.currentQuestion]) {
      content = (
        <div>
          <main className="question-wrapper">
            <ProgressBar
              current={this.state.currentQuestion}
              total={this.props.questions.length}
            />
            <ReactCSSTransitionGroup
              component="div"
              transitionName={{ enter: 'fadeInUp', leave: 'fadeOutUp' }}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <Question
                key={this.state.currentQuestion}
                onChoiceMade={this.handleQuestionChoice}
                {...this.props.questions[this.state.currentQuestion]}
              />
            </ReactCSSTransitionGroup>
          </main>
          <Dashboard
            items={this.props.dashboard}
            results={this.state.queryResults}
            gameState={this.gameState()}
          />
        </div>
      );
    } else {
      content = (
        <Summary
          gameState={this.gameState()}
          onRestartGame={this.handleRestartGame}
        />
      );
    }

    return (
      <div>
        <header>Energy Transition Model</header>
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
  dashboard: Dashboard.propTypes.items,
  questions: PropTypes.arrayOf(PropTypes.shape(
    { ...Question.propTypes, onChoiceMade: undefined }
  ))
};

export default Root;
