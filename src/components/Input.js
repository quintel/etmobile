import React, { PropTypes } from 'react';
import ChoiceButton from './ChoiceButton';

class Input extends React.Component {
  constructor() {
    super();

    this.state = { choice: null };
    this.handleChoiceChange = this.handleChoiceChange.bind(this);
  }

  handleChoiceChange(choiceIndex) {
    if (choiceIndex !== this.currentChoice()) {
      const choice = this.props.choices[choiceIndex];

      const inputValues = this.props.inputs.reduce((memo, input, index) => (
        { ...memo, [input]: choice.values[index] }
      ), {});

      this.setState({ choice: choiceIndex });

      this.props.onUpdateInput(inputValues);
    }
  }

  currentChoice() {
    if (this.state.choice !== null) {
      return this.state.choice;
    }

    return this.props.choices.findIndex(choice => choice.default);
  }

  backgroundImage() {
    if (this.props.image) {
      return `url(${
        require(`../images/inputs/${this.props.image}`) // eslint-disable-line
      })`;
    }

    return null;
  }

  render() {
    return (
      <div
        className={`input ${this.props.code}`}
        style={{ backgroundImage: this.backgroundImage() }}
      >
        <h2 className="name">{this.props.name}</h2>
        <div className="description" dangerouslySetInnerHTML={this.props.description} />
        <div className="buttons">
          {this.props.choices.map((choice, index) => (
            <ChoiceButton
              key={index}
              active={this.currentChoice() === index}
              onClick={this.handleChoiceChange}
              disabled={this.props.isLoading}
              index={index}
            >
              {choice.name}
            </ChoiceButton>
          ))}
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired
  })).isRequired,
  code: PropTypes.string.isRequired,
  description: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }).isRequired,
  image: PropTypes.string,
  inputs: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onUpdateInput: PropTypes.func
};

export default Input;
