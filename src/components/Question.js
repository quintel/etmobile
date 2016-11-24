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
    </button>
  );
};

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
      <div className="question">
        <h1>{this.props.name}</h1>

        <div className="choices-container">
          {this.props.choices.map((choice, index) => (
            <div className="choice-info" key={`choice-${index}`}>
              <div className="icon-wrapper">
                <ReactCSSTransitionGroup
                  component="div"
                  transitionName={{ enter: 'flipInY', leave: 'flipOutY' }}
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={0}
                >
                  {this.state.choice !== null ?
                    <ResultBadge
                      value={choice.delta}
                      isCorrect={choice.isCorrect}
                      key={`${index}-badge`}
                    /> :
                      <img
                        key={`${index}-icon`}
                        src={choiceImages[choice.icon]}
                        role="presentation"
                      />}
                </ReactCSSTransitionGroup>
              </div>

              <ReactCSSTransitionGroup
                component="div"
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

              <p
                className="description"
                dangerouslySetInnerHTML={{ __html: choice.description }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ResultBadge.propTypes = {
  value: PropTypes.number.isRequired,
  isCorrect: PropTypes.bool
};

ChoiceButton.propTypes = {
  index: PropTypes.number.isRequired,
  isCorrect: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selectedIndex: PropTypes.number
};

Question.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.shape({
    delta: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    inputs: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool
  })).isRequired,
  onChoiceMade: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Question;
