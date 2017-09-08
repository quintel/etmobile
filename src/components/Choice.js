import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ChoiceButton from './ChoiceButton';
import IconOrBadge from './IconOrBadge';

const Choice = ({ index, selectedIndex, choice, onChoiceSelected, showExplanations }) => (
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

    <div style={{ position: 'relative' }}>
      <ReactCSSTransitionGroup
        component="div"
        transitionName={{ enter: 'fadeIn', leave: 'fadeOut' }}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <p
          style={{ position: 'absolute' }}
          className="description animated"
          key={`choice-description-${showExplanations ? '0' : '1'}`}
          dangerouslySetInnerHTML={{
            __html: (showExplanations ? choice.why : choice.description)
          }}
        />
      </ReactCSSTransitionGroup>
    </div>
  </div>
);

// Choice shape prior to translations.
const sparseShapeObj = {
  delta: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  isCorrect: PropTypes.bool
};

Choice.propTypes = {
  choice: PropTypes.shape({
    ...sparseShapeObj,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number,
  onChoiceSelected: PropTypes.func.isRequired
};

export const sparseChoiceShape = PropTypes.shape(sparseShapeObj);
export default Choice;
