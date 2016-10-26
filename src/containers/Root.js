import React, { PropTypes } from 'react';

import Dashboard from '../components/Dashboard';
import Question from '../components/Question';

import dashboard from '../data/dashboard';
import questions from '../data/questions';

class Root extends React.Component {
  constructor() {
    super();

    this.state = { scenarioID: undefined, queryResults: {} };
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
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

  render() {
    return (
      <div>
        <header>Energy Transition Model</header>
        <main>
          <Question onChoiceMade={this.handleUpdateInput} {...questions[0]} />
        </main>
        <Dashboard items={dashboard} results={this.state.queryResults} />
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
