import React, { PropTypes } from 'react';

const LevelButton = props => (
  <button
    className={props.active ? 'active' : ''}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

LevelButton.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

LevelButton.defaultProps = {
  active: false,
  disabled: false
};

export default LevelButton;
