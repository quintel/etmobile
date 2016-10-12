import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';

import InputList from '../components/InputList';
import Dashboard from '../components/Dashboard';
import inputs from '../data/inputs';

class Root extends React.Component {
  constructor() {
    super();

    this.state = { scenarioID: undefined };
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  componentDidMount() {
    this.props.api.createScenario()
      .then(({ id }) => this.setState({ scenarioID: id }));
  }

  handleUpdateInput(inputCode, value) {
    this.props.api.updateScenario(
      this.state.scenarioID, { [inputCode]: value }
    );
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

Root.propTypes = {
  api: PropTypes.shape({
    createScenario: PropTypes.func.isRequired,
    updateScenario: PropTypes.func.isRequired
  }).isRequired
};

export default Root;
