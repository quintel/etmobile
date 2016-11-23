import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import classNames from 'classnames';

import * as choiceImages from '../images/choices';

export const ChoiceButton = (props) => {
  const isSelected = props.index === props.selectedIndex;

  const classes = classNames({
    correct: isSelected && props.isCorrect,
    incorrect: isSelected && !props.isCorrect,
    animated: true
  });

  let name = props.name;

  if (isSelected) {
    name = props.isCorrect ? '✔︎ Correct!' : '✘ Incorrect!';
  }

  return (
    <button
      onClick={() => props.onClick(props.index)}
      disabled={props.selectedIndex !== null}
      className={classes}
    >
      {name}{' '}
      {isSelected ? '' : <span className="arrows">&raquo;</span>}
    </button>
  );
};

class Question extends React.Component {
  constructor() {
    super();

    this.state = { choice: null };
    this.onChoiceSelected = this.onChoiceSelected.bind(this);
  }

  onChoiceSelected(choiceIndex) {
    const choice = this.props.choices[choiceIndex];

    this.setState({ choice: choiceIndex });
    this.props.onChoiceMade(choice);
  }

  render() {
    return (
      <div className="question animated">
        <h1>{this.props.name}</h1>

        <div className="choices-container">
          {this.props.choices.map((choice, index) => (
            <div className="choice-info" key={`choice-${index}`}>
              <img
                key={`icon-${index}`}
                src={choiceImages[choice.icon]}
                role="presentation"
              />

              <p className="description" key={index}>
                {choice.description}
              </p>
            </div>
          ))}
        </div>

        <div className="choices-container">
          {this.props.choices.map((choice, index) => (
            <ReactCSSTransitionGroup
              component="div"
              key={`button-${index}`}
              transitionName={{ enter: 'fadeIn', leave: 'bounceOut' }}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              <ChoiceButton
                key={`${index}-${this.state.choice === index ? '1' : '0'}`}
                index={index}
                isCorrect={choice.isCorrect}
                name={choice.name}
                onClick={this.onChoiceSelected}
                selectedIndex={this.state.choice}
              />
            </ReactCSSTransitionGroup>
          ))}
        </div>
      </div>
    );
  }
}

ChoiceButton.propTypes = {
  index: PropTypes.number.isRequired,
  isCorrect: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selectedIndex: PropTypes.number
};

Question.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    inputs: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool
  })).isRequired,
  onChoiceMade: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Question;
