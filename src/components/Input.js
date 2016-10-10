import React, { PropTypes } from 'react';
import LevelButton from './LevelButton';

class Input extends React.Component {
  constructor() {
    super();
    this.state = { level: undefined };
  }

  handleLevelChange(level) {
    this.setState({ level });
  }

  currentLevel() {
    if (this.state.level !== undefined) {
      return this.state.level;
    }

    return this.props.levels.findIndex(post => post.default) || 0;
  }

  render() {
    return (
      <div className={`input ${this.props.code}`}>
        <h2 className="name">{this.props.name}</h2>
        <div className="description" dangerouslySetInnerHTML={this.props.description} />
        <div className="buttons">
          {this.props.levels.map((level, index) => (
            <LevelButton
              key={index}
              active={this.currentLevel() === index}
              onClick={() => this.handleLevelChange(index)}
            >
              {level.name}
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
  levels: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  name: PropTypes.string.isRequired
};

export default Input;
