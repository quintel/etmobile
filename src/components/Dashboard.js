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

const formatValue = (item, results) => {
  if (!results.hasOwnProperty(item.query)) {
    return '—';
  }

  return (item.formatValue || (e => e))(results[item.query]);
};

const Dashboard = props => (
  <div className="dashboard">
    {props.items.map(item => (
      <div className="dashboard-item" key={item.query}>
        <span
          className="icon"
          style={{ backgroundImage: `url(${itemIcon(item.icon)})` }}
          alt={item.title}
        />
        <span className="value">{formatValue(item, props.results)}</span>
      </div>
    ))}
  </div>
);

Dashboard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      formatValue: PropTypes.func,
      icon: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  results: PropTypes.shape().isRequired
};

export default Dashboard;
