import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';

import Root from './containers/Root';

import {
  createScenario,
  updateScenarioQueued as updateScenario
} from './utils/api';

import './index.css';

render(
  <Root api={{ createScenario, updateScenario }} />,
  document.getElementById('root')
);
