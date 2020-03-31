import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Wraps an element inside a clickable button, which may be used to select a
 * choice.
 */
const Chooser = (props) => {
  const isSelected = props.index === props.selectedIndex;

  const classes = classNames({
    correct: isSelected && props.isCorrect,
    incorrect: isSelected && !props.isCorrect,
    ...(props.classNames || {})
  });

  const onClick = (event) => {
    event.preventDefault();
    props.onClick(props.index);
  };

  return (
    <button
      onClick={onClick}
      disabled={props.selectedIndex !== null}
      className={classNames(classes)}
    >
      {props.children}
    </button>
  );
};

Chooser.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.shape({}),
  index: PropTypes.number.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  selectedIndex: PropTypes.number
};

Chooser.defaultProps = { isCorrect: false, selectedIndex: null };

export default Chooser;
