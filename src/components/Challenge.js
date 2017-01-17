import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import classNames from 'classnames';

import Leaderboard from './LeaderBoard';

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
  name: PropTypes.string.isRequired
};

export default Challenge;
