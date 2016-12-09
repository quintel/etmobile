import React, { PropTypes } from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

/**
 * Sorts leaderboard entries in descending score order. Firebase returns them
 * in ascending order, and simply calling "reverse" on the results seems to
 * cause re-renders.
 */
const sortEntries = (a, b) => (a.score < b.score ? 1 : 0);

const LeaderBoardItem = props => (
  <li>
    <div className="position">{props.position}</div>
    <div className="details">
      <div className="visitor">Anonymous got {props.score} correct</div>
      <div className="at">{distanceInWordsToNow(props.at)} ago</div>
    </div>
  </li>
);

LeaderBoardItem.propTypes = {
  at: PropTypes.instanceOf(Date).isRequired,
  position: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
};

class LeaderBoard extends React.Component {
  constructor() {
    super();
    this.state = { results: null };
  }

  componentWillMount() {
    this.syncRef = this.props.base.bindToState(
      `leaderboards/${this.props.endpoint}`,
      {
        context: this,
        state: 'results',
        asArray: true,
        queries: {
          orderByChild: 'score',
          limitToLast: 10
        }
      }
    );
  }

  componentWillUnmount() {
    this.props.base.removeBinding(this.syncRef);
  }

  render() {
    let content;

    if (this.state.results) {
      content = (
        <ul>
          {this.state.results.sort(sortEntries).map((res, index) =>
            <LeaderBoardItem
              key={index}
              at={new Date(res.at)}
              score={res.score}
              position={index + 1}
            />
          )}
        </ul>
      );
    } else {
      content = <div>Loading results...</div>;
    }

    return (
      <div className="leaderboard">
        {this.props.title ? <h6>{this.props.title}</h6> : null}
        {content}
      </div>
    );
  }
}

LeaderBoard.propTypes = {
  base: PropTypes.shape({
    bindToState: PropTypes.func.isRequired,
    removeBinding: PropTypes.func.isRequired
  }).isRequired,
  endpoint: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default LeaderBoard;
