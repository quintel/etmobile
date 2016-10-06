import React, { PropTypes } from 'react';

const LevelButton = props => (
  <button onClick={props.onClick} className={props.active ? 'active' : ''}>
    {props.children}
  </button>
);

LevelButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

LevelButton.defaultProps = {
  active: false
};

export default LevelButton;
