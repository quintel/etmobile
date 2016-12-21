import 'normalize.css';
import 'animate.css';

import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router';

import ReactGA from 'react-ga';

import Root from './containers/Root';

import answers from './data/answers';
import choices from './data/choices';

import base from './utils/base';

import shuffleArray from './utils/shuffleArray';
import mapAnswersToChoices from './utils/mapAnswersToChoices';

import './index.css';

require('smoothscroll-polyfill').polyfill();

const gameChoices = shuffleArray(mapAnswersToChoices(answers, choices));

ReactGA.initialize('UA-88096029-1');
ReactGA.pageview(window.location.pathname);

render(
  <HashRouter>
    <Root base={base} choices={gameChoices} />
  </HashRouter>,
  document.getElementById('root')
);
