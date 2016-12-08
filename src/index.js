import 'normalize.css';
import 'animate.css';

import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Match, Redirect } from 'react-router';

import Root from './containers/Root';
import NewChallenge from './components/NewChallenge';

import answers from './data/answers';
import choices from './data/choices';
import dashboard from './data/dashboard';

import base from './utils/base';

import shuffleArray from './utils/shuffleArray';
import mapAnswersToChoices from './utils/mapAnswersToChoices';

import {
  createScenario,
  updateScenarioQueued as updateScenario
} from './utils/api';

import './index.css';

const gameChoices = shuffleArray(mapAnswersToChoices(answers, choices));

render(
  <HashRouter>
    <div>
      <Match
        exactly
        pattern="/"
        render={() => (
          <Redirect to={{ pathname: '/play' }} />
        )}
      />

      <Match
        pattern="/play/:challengeId?"
        render={({ params }) => (
          <Root
            api={{ createScenario, updateScenario }}
            dashboard={dashboard}
            choices={gameChoices}
            base={base}
            params={params}
          />
        )}
      />

      <Match
        pattern="/new-challenge"
        render={() => <NewChallenge base={base} />}
      />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
