import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import injectIntl from '../utils/injectIntl';

import trophyGold from '../images/leaderboard/gold.svg';
import trophySilver from '../images/leaderboard/silver.svg';
import trophyBronze from '../images/leaderboard/bronze.svg';

const positionImages = [null, trophyGold, trophySilver, trophyBronze];

/**
 * Sorts leaderboard entries in descending score order. Firebase returns them
 * in ascending order, and simply calling "reverse" on the results seems to
 * cause re-renders.
 */
const sortEntries = (a, b) => {
  if (a.score !== b.score) {
    // Sort by score
    return a.score < b.score ? 2 : -2;
  }

  // Then by how recent the result is.
  return a.at < b.at ? 1 : -1;
};

const LeaderBoardItem = injectIntl(((props, context) => (
  <li>
    {positionImages[props.position] ?
      <img
        src={positionImages[props.position]}
        alt={props.position}
        height="50"
        width="50"
      /> :
      <div className="position">{props.position}</div>
    }
    <div className="details">
      <div className="visitor">
        {props.who || context.intl.formatMessage({ id: 'leaderboard.anon' })}
      </div>
      <div className="at">
        <FormattedMessage
          id="leaderboard.result"
          values={{ score: props.score }}
        />
        {' '}
        <FormattedRelative value={props.at} />
      </div>
    </div>
  </li>
)));

LeaderBoardItem.propTypes = {
  at: PropTypes.instanceOf(Date).isRequired,
  position: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  who: PropTypes.string
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
          // Omit any entries with a score less than one (or null, which is the
          // case if the visitor has no correct answers but sets a name).
          startAt: 1,
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

    if (this.state.results && this.state.results.length) {
      content = this.state.results.sort(sortEntries).map((res, index) =>
        <LeaderBoardItem
          key={index}
          at={new Date(res.at)}
          who={res.who}
          score={res.score}
          position={index + 1}
        />
      );
    } else if (this.state.results) {
      content = (
        <li>
          <div className="notice">
            <FormattedMessage id="leaderboard.noPlayers" />
          </div>
        </li>
      );
    } else {
      content = (
        <li>
          <div className="notice">
            <FormattedMessage id="leaderboard.loading" />&hellip;
          </div>
        </li>
      );
    }

    return (
      <div className="leaderboard">
        {this.props.title ? <h2>{this.props.title}</h2> : null}
        <ul>
          {content}
        </ul>
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
