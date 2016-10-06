import React, { Component } from 'react';
import InputList from './components/InputList';

import inputs from './data/inputs';

class App extends Component {
  render() {
    return (
      <InputList inputs={inputs} />
    );
  }
}

export default App;
