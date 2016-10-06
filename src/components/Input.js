import React, { PropTypes } from 'react';
import LevelButton from './LevelButton';

const selectableLevels = ['Zero', 'Low', 'Medium', 'High'];

class Input extends React.Component {
  constructor() {
    super();
    this.state = { level: 1 };
  }

  handleLevelChange(level) {
    this.setState({ level });
  }

  render() {
    return (
      <div className="input">
        <code>{this.props.code}</code>
        <h2 className="name">{this.props.name}</h2>
        <div className="description" dangerouslySetInnerHTML={this.props.description} />
        <div className="buttons">
          {selectableLevels.map((text, index) => (
            <LevelButton
              key={index}
              active={this.state.level === index}
              onClick={() => this.handleLevelChange(index)}
            >
              {text}
            </LevelButton>
          ))}
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  code: PropTypes.string.isRequired,
  description: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }).isRequired,
  name: PropTypes.string.isRequired
};

export default Input;
