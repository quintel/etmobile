import React, { PropTypes } from 'react';

class ChoiceButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <button
        className={this.props.active ? 'active' : ''}
        disabled={this.props.disabled}
        onClick={this.handleClick}
      >
        {this.props.children}
      </button>
    );
  }
}

ChoiceButton.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

ChoiceButton.defaultProps = {
  active: false,
  disabled: false
};

export default ChoiceButton;
