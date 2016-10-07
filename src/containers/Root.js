import React from 'react';

import InputList from '../components/InputList';
import Dashboard from '../components/Dashboard';

import inputs from '../data/inputs';

const Root = () => (
  <div>
    <InputList inputs={inputs} />
    <Dashboard />
  </div>
);

export default Root;
