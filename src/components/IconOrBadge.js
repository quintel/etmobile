import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import classNames from 'classnames';

import Chooser from './Chooser';

import * as choiceImages from '../images/choices';

/**
 * Depending on the state of the question, shows either an icon to represent the
 * choice or the result badge showing the CO2 delta for the choice.
 */
const IconOrBadge = ({ choice, selectedIndex, index, onChoiceSelected }) => {
  let content;

  if (selectedIndex !== null) {
    content = (
      <ResultBadge
        value={choice.delta}
        isCorrect={choice.isCorrect}
        key={`${index}-badge`}
      />
    );
  } else {
    content = (
      <Chooser
        classNames={{ 'clickable-icon': true }}
        onClick={onChoiceSelected}
        index={index}
        isCorrect={choice.isCorrect}
        selectedIndex={selectedIndex}
      >
        <img
          key={`${index}-icon`}
          alt=""
          src={choiceImages[choice.icon]}
        />
      </Chooser>
    );
  }

  return (
    <ReactCSSTransitionGroup
      component="div"
      transitionName={{ enter: 'bounceIn', leave: 'fadeOut' }}
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={0}
    >
      {content}
    </ReactCSSTransitionGroup>
  );
};

IconOrBadge.propTypes = {
  choice: PropTypes.shape({
    delta: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool
  }).isRequired,
  index: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number,
  onChoiceSelected: PropTypes.func.isRequired
};

IconOrBadge.defaultProps = { selectedIndex: null };

const ResultBadge = (props) => {
  const classes = classNames({
    animated: true,
    badge: true,
    correct: props.isCorrect,
    incorrect: !props.isCorrect
  });

  const value = Math.round(props.value * 100) / 100;

  return (<div className={classes}>{value}%</div>);
};

ResultBadge.propTypes = {
  value: PropTypes.number.isRequired,
  isCorrect: PropTypes.bool
};

export default IconOrBadge;
