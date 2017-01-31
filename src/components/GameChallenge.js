import React, { PropTypes } from 'react';

import Game from './Game';
import * as gameModes from '../data/gameModes';

const DEFAULT_MODE = 'easy';

/**
 * Starts a game, selecting the appropriate mode as defined by the challenge. If
 * no challenge is used for the game, the default game mode is selected, unless
 * one is provided as a prop.
 */
class GameChallenge extends React.Component {
  constructor() {
    super();
    this.state = { mode: null };
  }

  componentDidMount() {
    const { params: { challengeId }, base } = this.props;

    if (challengeId) {
      base.fetch(`challenges/${challengeId}`, { context: this })
       .then(({ mode }) => this.startWithModeName(mode));
    } else {
      this.start();
    }
  }

  /**
   * Starts a game using the optional mode name provided in the props. Falls
   * back to the default if no mode was given.
   */
  start() {
    this.startWithModeName(this.props.modeName);
  }

  /**
   * Starts a new game with the given mode name. Uses the default mode if the
   * mode does not exist.
   */
  startWithModeName(name = null) {
    this.setState({
      mode: gameModes[name] || gameModes[DEFAULT_MODE]
    });
  }

  render() {
    if (this.state.mode) {
      return (
        <Game
          mode={this.state.mode}
          challengeId={this.props.params.challengeId}
          {...this.props}
        />
      );
    }

    return <p>Please wait...</p>;
  }
}

GameChallenge.propTypes = {
  base: PropTypes.shape({
    fetch: PropTypes.func.isRequired
  }).isRequired,
  modeName: PropTypes.string,
  params: PropTypes.shape({ challengeId: PropTypes.string }).isRequired
};

export default GameChallenge;
