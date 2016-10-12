import React, { PropTypes } from 'react';
import LevelButton from './LevelButton';

class Input extends React.Component {
  constructor() {
    super();

    this.state = { level: undefined };
    this.handleLevelChange = this.handleLevelChange.bind(this);
  }

  handleLevelChange(level) {
    if (level !== this.currentLevel()) {
      const { code, levels } = this.props;

      this.setState({ level });
      this.props.onUpdateInput(code, levels[level].value);
    }
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
              onClick={this.handleLevelChange}
              disabled={this.props.isLoading}
              index={index}
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
  isLoading: PropTypes.bool,
  levels: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })).isRequired,
  name: PropTypes.string.isRequired,
  onUpdateInput: PropTypes.func
};

export default Input;
