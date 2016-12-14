import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Challenge from './Challenge';

const sortChallenges = (left, right) => (
  left.name.toLowerCase() < right.name.toLowerCase() ? 0 : 1
);

class ChallengeList extends React.Component {
  constructor() {
    super();
    this.state = { challenges: null };
  }

  componentWillMount() {
    const queries = { orderByChild: 'expires' };

    if (this.props.active) {
      queries.startAt = new Date().getTime();
    } else {
      queries.endAt = new Date().getTime();
    }

    this.props.base.fetch('challenges', {
      context: this,
      asArray: true,
      queries
    }).then(data =>
      this.setState({ challenges: data.sort(sortChallenges) })
    );
  }

  render() {
    return (
      <div className="challenges">
        {this.state.challenges ?
          this.state.challenges.map(({ key, name, expires }) => (
            <Challenge
              key={key}
              base={this.props.base}
              expires={new Date(expires)}
              id={key}
              name={name}
            />
          )) :
          <p>Loading challenges...</p>
        }

        <Link to="/new-challenge" className="button">
          Create a new challenge
        </Link>
      </div>
    );
  }
}

ChallengeList.contextTypes = {
  router: PropTypes.shape({})
};

ChallengeList.propTypes = {
  active: PropTypes.bool,
  base: PropTypes.shape({
    fetch: PropTypes.func.isRequired
  }).isRequired
};

ChallengeList.defaultProps = {
  active: false
};

export default ChallengeList;
