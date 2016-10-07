import React from 'react';
import Headroom from 'react-headroom';

import InputList from '../components/InputList';
import Dashboard from '../components/Dashboard';

import inputs from '../data/inputs';

const Root = () => (
  <div>
    <Headroom>
      <header>Energy Transition Model</header>
    </Headroom>
    <InputList inputs={inputs} />
    <Dashboard />
  </div>
);

export default Root;
