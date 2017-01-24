import React, { PropTypes } from 'react';

import Game from './Game';
import * as gameModes from '../data/gameModes';

const DEFAULT_MODE = 'easy';

class GameChallenge extends React.Component {
  constructor() {
    super();
    this.state = { mode: null };
  }

  componentDidMount() {
    // if challengeId
    //   fetch challenge and game mode
    // else
    //   use default

    this.start();
  }

  start() {
    this.startWithModeName(this.props.modeName);
  }

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
  modeName: PropTypes.string,
  params: PropTypes.shape({ challengeId: PropTypes.string }).isRequired
};

export default GameChallenge;
