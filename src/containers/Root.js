import React, { PropTypes } from 'react';

import { Match, propTypes as RouterPropTypes } from 'react-router';

import { IntlProvider, addLocaleData } from 'react-intl';
import englishLocaleData from 'react-intl/locale-data/en';
import dutchLocaleData from 'react-intl/locale-data/nl';

import GameChallenge from '../components/GameChallenge';
import NewChallenge from '../components/NewChallenge';
import FrontPage from '../components/FrontPage';
import { sparseChoiceShape } from '../components/Choice';

import translations from '../data/locales/translations';
import suitableLanguage, { storeLocale } from '../utils/suitableLanguage';

import { pageview } from '../utils/analytics';

addLocaleData([...englishLocaleData, ...dutchLocaleData]);

class Root extends React.Component {
  constructor() {
    super();

    this.setLocale = this.setLocale.bind(this);
    this.state = { locale: null };
  }

  componentDidMount() {
    // Enable scroll-to-top when navigating to a new page.
    /* istanbul ignore next */
    this.historyUnlisten = this.context.history.listen((location, type) => {
      if (type !== 'POP') {
        window.scrollTo(0, 0);
      }

      pageview(location.pathname);
    });
  }

  /* istanbul ignore next */
  componentWillUnmount() {
    this.historyUnlisten();
  }

  setLocale(locale) {
    this.setState({ locale });
    storeLocale(locale);
  }

  activeLocale() {
    // By request of the main client, use NL by default rather than detecting
    // the browser preference.
    return this.state.locale || suitableLanguage(['nl']);
  }

  render() {
    return (
      <IntlProvider
        locale={this.activeLocale()}
        messages={translations(this.activeLocale())}
      >
        <div>
          <Match
            exactly
            pattern="/"
            render={() => (
              <FrontPage
                base={this.props.base}
                setLocale={this.setLocale}
              />
            )}
          />

          <Match
            pattern="/play/:challengeId?"
            render={({ params }) => (
              <GameChallenge
                choices={this.props.choices}
                base={this.props.base}
                params={params}
              />
            )}
          />

          <Match
            pattern="/new-challenge"
            render={() => <NewChallenge base={this.props.base} />}
          />
        </div>
      </IntlProvider>
    );
  }
}

Root.contextTypes = {
  history: RouterPropTypes.historyContext.isRequired,
  router: RouterPropTypes.routerContext.isRequired
};

Root.propTypes = {
  base: PropTypes.shape({
    auth: PropTypes.func.isRequired,
    bindToState: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired,
    onAuth: PropTypes.func.isRequired,
    post: PropTypes.func.isRequired,
    removeBinding: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
  }).isRequired,
  choices: PropTypes.arrayOf(sparseChoiceShape).isRequired
};

export default Root;
