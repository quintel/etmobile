import React, { PropTypes } from 'react';

import { Match, propTypes as RouterPropTypes } from 'react-router';

import Game from '../components/Game';
import NewChallenge from '../components/NewChallenge';
import FrontPage from '../components/FrontPage';
import { sparseChoiceShape } from '../components/Choice';

import { pageview } from '../utils/analytics';

class Root extends React.Component {
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

  render() {
    return (
      <div>
        <Match
          exactly
          pattern="/"
          render={() => <FrontPage base={this.props.base} />}
        />

        <Match
          pattern="/play/:challengeId?"
          render={({ params }) => (
            <Game
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
