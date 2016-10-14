import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';

import InputList from '../components/InputList';
import Dashboard from '../components/Dashboard';

import inputs from '../data/inputs';
import dashboard from '../data/dashboard';

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

  handleUpdateInput(inputCode, value) {
    return this.fetchQueries(this.state.scenarioID, { [inputCode]: value });
  }

  render() {
    return (
      <div>
        <Headroom>
          <header>Energy Transition Model</header>
        </Headroom>
        <InputList
          onUpdateInput={this.handleUpdateInput}
          inputs={inputs}
          scenarioID={this.state.scenarioID}
        />
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
