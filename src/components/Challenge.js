import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

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

    return (
      <div className="challenge">
        <strong>{this.props.name}</strong>{' '}
        ends in {distanceInWordsToNow(new Date(this.props.expires))}

        <div className="buttons">
          <Link className="button" to={`/play/${this.props.id}`}>Play!</Link>{' '}
          <button onClick={this.toggleLeaderboard}>Leaderboard</button>
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
