import React, { PropTypes } from 'react';

import Chooser from './Chooser';

/**
 * A button which may be pressed to make a choice. The choice name is placed
 * on the button.
 */
const ChoiceButton = (props) => {
  const isSelected = props.index === props.selectedIndex;
  const classes = { animated: true };

  let name = props.children;

  if (isSelected) {
    name = props.isCorrect ? '✔︎ Correct!' : '✘ Incorrect!';
  }

  return (
    <Chooser
      classNames={classes}
      onClick={props.onClick}
      index={props.index}
      selectedIndex={props.selectedIndex}
      isCorrect={props.isCorrect}
    >
      {name}
    </Chooser>
  );
};

ChoiceButton.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  isCorrect: PropTypes.bool,
  onClick: PropTypes.func,
  selectedIndex: PropTypes.number
};

ChoiceButton.defaultProps = { isCorrect: false, selectedIndex: null };

export default ChoiceButton;
