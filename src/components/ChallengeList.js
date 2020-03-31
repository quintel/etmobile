import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

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
    if (!this.state.challenges) {
      return (
        <div className="challenge loading">
          <FormattedMessage id="challenges.loadingChallenges" />&hellip;
        </div>
      );
    }

    return (
      <div>
        {this.state.challenges.map(({ key, name, expires, mode }) => (
          <Challenge
            key={key}
            base={this.props.base}
            expires={new Date(expires)}
            id={key}
            modeName={mode}
            name={name}
          />
        ))}
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
