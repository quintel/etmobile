import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import classNames from 'classnames';

import Leaderboard from './LeaderBoard';

import * as gameModes from '../data/gameModes';

class Challenge extends React.Component {
  constructor() {
    super();

    this.state = { showLeaderboard: false };
    this.toggleLeaderboard = this.toggleLeaderboard.bind(this);
  }

  toggleLeaderboard() {
    this.setState({ showLeaderboard: !this.state.showLeaderboard });
  }

  render() {
    let leaderboard = null;

    if (this.state.showLeaderboard) {
      leaderboard = (
        <Leaderboard base={this.props.base} endpoint={this.props.id} />
      );
    }

    const lbClasses = classNames({
      active: this.state.showLeaderboard
    });

    return (
      <div className="challenge">
        <strong>{this.props.name}</strong>{' '}
        <span className="at">
          <FormattedMessage id="challenges.ends" />{' '}
          <FormattedRelative value={new Date(this.props.expires)} />
          {' '}&middot;{' '}
          <FormattedMessage id={gameModes[this.props.modeName].name} />
        </span>

        <div className="buttons">
          <Link className="button" to={`/play/${this.props.id}`}>
            <FormattedMessage id="challenges.play" />
          </Link>{' '}

          <button className={lbClasses} onClick={this.toggleLeaderboard}>
            <FormattedMessage id="challenges.leaderboard" />
          </button>
        </div>

        {leaderboard}
      </div>
    );
  }
}

Challenge.propTypes = {
  base: PropTypes.shape({
    bindToState: PropTypes.func.isRequired,
    removeBinding: PropTypes.func.isRequired
  }).isRequired,
  expires: PropTypes.instanceOf(Date).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  modeName: PropTypes.string.isRequired
};

export default Challenge;
