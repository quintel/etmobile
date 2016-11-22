import 'normalize.css';
import 'animate.css';

import React from 'react';
import { render } from 'react-dom';

import Root from './containers/Root';

// import questions from './data/questions';
import answers from './data/answers';
import choices from './data/choices';
import dashboard from './data/dashboard';

import shuffleArray from './utils/shuffleArray';
import mapAnswersToChoices from './utils/mapAnswersToChoices';
import choicesToQuestions from './utils/choicesToQuestions';

import {
  createScenario,
  updateScenarioQueued as updateScenario
} from './utils/api';

import './index.css';

const gameQuestions =
  choicesToQuestions(shuffleArray(mapAnswersToChoices(answers, choices)));

render(
  <Root
    api={{ createScenario, updateScenario }}
    dashboard={dashboard}
    questions={gameQuestions}
  />,
  document.getElementById('root')
);
