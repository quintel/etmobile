import React, { PropTypes } from 'react';
import classNames from 'classnames';

import * as choiceImages from '../images/choices';

export const ChoiceButton = (props) => {
  const isSelected = props.index === props.selectedIndex;

  const classes = classNames({
    correct: isSelected && props.isCorrect,
    incorrect: isSelected && !props.isCorrect
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

    const inputValues = this.props.inputs.reduce((memo, input, index) => (
      { ...memo, [input]: choice.values[index] }
    ), {});

    this.setState({ choice: choiceIndex });

    this.props.onChoiceMade(inputValues);
  }

  render() {
    return (
      <div className="question animated">
        <h1>{this.props.name}</h1>
        <div className="icons">
          {this.props.choices.map((choice, index) => (
            <img
              key={`icon-${index}`}
              src={choiceImages[choice.icon]}
              role="presentation"
            />
          ))}
        </div>

        <div
          className="description"
          dangerouslySetInnerHTML={this.props.description}
        />

        <div className="choices">
          {this.props.choices.map((choice, index) => (
            <ChoiceButton
              key={index}
              index={index}
              isCorrect={choice.isCorrect}
              name={choice.name}
              onClick={this.onChoiceSelected}
              selectedIndex={this.state.choice}
            />
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
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
    icon: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool
  })).isRequired,
  description: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }).isRequired,
  inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChoiceMade: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Question;
