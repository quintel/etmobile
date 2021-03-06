import 'normalize.css';
import 'animate.css';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './utils/polyfills';

// Set up analytics.
import { pageview } from './utils/analytics';

import Root from './containers/Root';

import answers from './data/answers';
import choices from './data/choices';

import base from './utils/base';

import shuffleArray from './utils/shuffleArray';
import mapAnswersToChoices from './utils/mapAnswersToChoices';

import './index.css';

require('smoothscroll-polyfill').polyfill();

const gameChoices = shuffleArray(mapAnswersToChoices(answers, choices));

pageview(window.location.pathname);

render(
  <BrowserRouter>
    <Root base={base} choices={gameChoices} />
  </BrowserRouter>,
  document.getElementById('root')
);
