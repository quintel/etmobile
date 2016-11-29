import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ChoiceButton from './ChoiceButton';
import IconOrBadge from './IconOrBadge';

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
                <IconOrBadge
                  choice={choice}
                  index={index}
                  selectedIndex={this.state.choice}
                  onChoiceSelected={this.onChoiceSelected}
                />
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
                  onClick={this.onChoiceSelected}
                  selectedIndex={this.state.choice}
                >
                  {choice.name}
                </ChoiceButton>
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
