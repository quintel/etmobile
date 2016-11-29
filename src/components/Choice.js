import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ChoiceButton from './ChoiceButton';
import IconOrBadge from './IconOrBadge';

const Choice = ({ index, selectedIndex, choice, onChoiceSelected }) => (
  <div className="choice-info" key={`choice-${index}`}>
    <div className="icon-wrapper">
      <IconOrBadge
        choice={choice}
        index={index}
        selectedIndex={selectedIndex}
        onChoiceSelected={onChoiceSelected}
      />
    </div>

    <ReactCSSTransitionGroup
      component="div"
      transitionName={{ enter: 'fadeIn', leave: 'bounceOut' }}
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
    >
      <ChoiceButton
        key={`${index}-${selectedIndex === index ? '1' : '0'}`}
        index={index}
        isCorrect={choice.isCorrect}
        onClick={onChoiceSelected}
        selectedIndex={selectedIndex}
      >
        {choice.name}
      </ChoiceButton>
    </ReactCSSTransitionGroup>

    <p
      className="description"
      dangerouslySetInnerHTML={{ __html: choice.description }}
    />
  </div>
);

Choice.propTypes = {
  choice: PropTypes.shape({
    delta: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool,
    name: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number,
  onChoiceSelected: PropTypes.func.isRequired
};

export default Choice;
