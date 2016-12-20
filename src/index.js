import 'normalize.css';
import 'animate.css';

import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Match, propTypes as RouterPropTypes } from 'react-router';

import ReactGA from 'react-ga';

import Root from './containers/Root';
import NewChallenge from './components/NewChallenge';
import FrontPage from './components/FrontPage';

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

require('smoothscroll-polyfill').polyfill();

const gameChoices = shuffleArray(mapAnswersToChoices(answers, choices));

const scrollToTop = () => window.scrollTo(0, 0);

ReactGA.initialize('UA-88096029-1');
ReactGA.pageview(window.location.pathname);

class AppRouter extends React.Component {
  componentDidMount() {
    // Enable scroll-to-top when navigating to a new page.
    this.historyUnlisten = this.context.history.listen((location, type) => {
      if (type !== 'POP') {
        scrollToTop();
      }

      ReactGA.pageview(location.pathname);
    });
  }

  componentWillUnmount() {
    this.historyUnlisten();
  }

  render() {
    return (
      <div>
        <Match
          exactly
          pattern="/"
          render={() => <FrontPage base={base} />}
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
    );
  }
}

AppRouter.contextTypes = {
  history: RouterPropTypes.historyContext.isRequired
};

render(
  <HashRouter>
    <AppRouter />
  </HashRouter>,
  document.getElementById('root')
);
