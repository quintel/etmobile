import React, { PropTypes } from 'react';

import Choice from './Choice';

class Question extends React.Component {
  constructor() {
    super();

    this.state = { choice: null };
    this.onChoiceSelected = this.onChoiceSelected.bind(this);
  }

  onChoiceSelected(choiceIndex) {
    if (this.state.choice !== null) {
      return;
    }

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
            <Choice
              key={index}
              choice={choice}
              index={index}
              onChoiceSelected={this.onChoiceSelected}
              selectedIndex={this.state.choice}
            />
          ))}
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  choices: PropTypes.arrayOf(Choice.propTypes.choice).isRequired,
  onChoiceMade: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Question;
