import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'animate.css';

import Dashboard from '../components/Dashboard';
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';
import Results from '../components/Results';

import dashboard from '../data/dashboard';
import questions from '../data/questions';

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
      dashboard.map(item => item.query).filter(query => query)
    ).then((data) => {
      this.setState({
        scenarioID: data.scenario.id,
        queryResults: data.gqueries
      });
    });
  }

  gameState() {
    return { correctChoices: this.state.correctChoices };
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
        questions[this.state.currentQuestion]) {
      content = (
        <div>
          <main className="question-wrapper">
            <ProgressBar
              current={this.state.currentQuestion}
              total={questions.length}
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
                {...questions[this.state.currentQuestion]}
              />
            </ReactCSSTransitionGroup>
          </main>
          <Dashboard
            items={dashboard}
            results={this.state.queryResults}
            gameState={this.gameState()}
          />
        </div>
      );
    } else {
      content = <Results gameState={this.gameState()} />;
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
  }).isRequired
};

export default Root;
