import React, { PropTypes } from 'react';

import * as images from '../images/dashboard';

const formatValue = (item, results, gameState) => {
  if (!item.hasOwnProperty('query')) {
    return item.formatValue(null, results, gameState);
  }

  if (!results.hasOwnProperty(item.query)) {
    return '—';
  }

  return (item.formatValue || (e => e))(
    results[item.query], results, gameState
  );
};

const Dashboard = props => (
  <div className="dashboard">
    {props.items.map((item, index) => (
      <div className="dashboard-item" key={index}>
        <span
          className="icon"
          style={{ backgroundImage: `url(${images[item.icon]})` }}
          alt={item.title}
        />
        <span className="value">
          {formatValue(item, props.results, props.gameState)}
        </span>
      </div>
    ))}
  </div>
);

Dashboard.propTypes = {
  gameState: PropTypes.shape({
    correctChoices: PropTypes.number.isRequired
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      formatValue: PropTypes.func,
      icon: PropTypes.string.isRequired,
      query: PropTypes.string,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  results: PropTypes.shape().isRequired
};

export default Dashboard;
