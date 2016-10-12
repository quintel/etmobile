import React from 'react';
import Headroom from 'react-headroom';

import InputList from '../components/InputList';
import Dashboard from '../components/Dashboard';

import inputs from '../data/inputs';

import { createScenario } from '../utils/api';

class Root extends React.Component {
  constructor() {
    super();
    this.state = { scenarioID: undefined };
  }

  componentDidMount() {
    createScenario().then(({ id }) => this.setState({ scenarioID: id }));
  }

  render() {
    return (
      <div>
        <Headroom>
          <header>Energy Transition Model</header>
        </Headroom>
        <InputList inputs={inputs} scenarioID={this.state.scenarioID} />
        <Dashboard />
      </div>
    );
  }
}

export default Root;
