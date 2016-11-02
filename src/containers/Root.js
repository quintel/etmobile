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
      scenarioID: undefined,
      queryResults: {}
    };

    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleQuestionChoice = this.handleQuestionChoice.bind(this);
  }

  componentDidMount() {
    this.props.api.createScenario().then(({ scenario: { id } }) => (
      // ETEngine API does not support fetching queries when creating a request
      // (yet), so we must make a second one.
      this.fetchQueries(id)
    ));
  }

  fetchQueries(scenarioID, inputKeys = {}) {
    return this.props.api.updateScenario(
      scenarioID,
      inputKeys,
      dashboard.map(item => item.query)
    ).then((data) => {
      this.setState({
        scenarioID: data.scenario.id,
        queryResults: data.gqueries
      });
    });
  }

  handleUpdateInput(inputValues) {
    return this.fetchQueries(this.state.scenarioID, inputValues);
  }

  handleQuestionChoice(inputValues) {
    const updatePromise = this.handleUpdateInput(inputValues);

    let resolveChangeQuestion;

    const changeQuestionPromise = new Promise((resolve) => {
      resolveChangeQuestion = resolve;
    });

    window.setTimeout(() => {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
      resolveChangeQuestion();
    }, 1000);

    // Consider the choice completed only once we have received a response from
    // ETEngine and the state has been changed so as to display the next
    // question.
    return Promise.all([updatePromise, changeQuestionPromise]);
  }

  render() {
    let content;

    if (questions[this.state.currentQuestion]) {
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
          <Dashboard items={dashboard} results={this.state.queryResults} />
        </div>
      );
    } else {
      content = <Results />;
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
