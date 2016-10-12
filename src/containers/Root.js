import React from 'react';
import Headroom from 'react-headroom';

import InputList from '../components/InputList';
import Dashboard from '../components/Dashboard';

import inputs from '../data/inputs';

import { createScenario, updateScenario } from '../utils/api';

class Root extends React.Component {
  constructor() {
    super();

    this.state = { scenarioID: undefined };
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  componentDidMount() {
    createScenario().then(({ id }) => this.setState({ scenarioID: id }));
  }

  handleUpdateInput(inputCode, value) {
    updateScenario(this.state.scenarioID, { [inputCode]: value });
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
        <Dashboard />
      </div>
    );
  }
}

export default Root;
