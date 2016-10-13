import React, { PropTypes } from 'react';

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
        {item.title}{' '}
        <span className="value">{formatValue(item, props.results)}</span>
      </div>
    ))}
  </div>
);

Dashboard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      formatValue: PropTypes.func,
      query: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  results: PropTypes.shape().isRequired
};

export default Dashboard;
