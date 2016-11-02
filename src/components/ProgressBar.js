import React, { PropTypes } from 'react';

/**
 * Given a number of questions - total - and the current question - current -
 * determines how wide the bar should be.
 */
const progressToWidth = ({ current, total }) => (
  `${((current + 1) / (total + 1)) * 100}%`
);

const ProgressBar = props => (
  <div className="progress-bar">
    <div className="amount" style={{ width: progressToWidth(props) }} />
  </div>
);

ProgressBar.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default ProgressBar;
