import 'normalize.css';
import 'animate.css';

import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router';

import { IntlProvider, addLocaleData } from 'react-intl';
import englishLocaleData from 'react-intl/locale-data/en';
import dutchLocaleData from 'react-intl/locale-data/nl';
import translations from './data/locales/translations';

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

addLocaleData([...englishLocaleData, ...dutchLocaleData]);

render(
  <IntlProvider locale="en" messages={translations('en')}>
    <HashRouter>
      <Root base={base} choices={gameChoices} />
    </HashRouter>
  </IntlProvider>,
  document.getElementById('root')
);
