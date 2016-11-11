import React, { PropTypes } from 'react';

import co2Svg from '../images/dashboard/co2.svg';
import costsSvg from '../images/dashboard/costs.svg';
import leaderboardSvg from '../images/dashboard/leaderboard.svg';

const itemIcon = (iconName) => {
  switch (iconName) {
    case 'costs':
      return costsSvg;
    case 'leaderboard':
      return leaderboardSvg;
    default:
      return co2Svg;
  }
};

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
          style={{ backgroundImage: `url(${itemIcon(item.icon)})` }}
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
  results: PropTypes.shape().isRequired,
};

export default Dashboard;
