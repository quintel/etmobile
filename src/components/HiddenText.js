import React, { PropTypes } from 'react';

/**
 * Takes a node as children which will be hidden by default and replaced with
 * a button, whose label will be props.buttonText. When the user presses the
 * button it will be replaced with the text.
 */
class HiddenText extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
    this.open = this.open.bind(this);
  }

  open() {
    this.setState({ open: true });
  }

  render() {
    let content;

    if (this.state.open) {
      content = <div>{this.props.children}</div>;
    } else {
      content = (
        <button onClick={this.open} className="link">
          {this.props.buttonText}
        </button>
      );
    }

    return <div className="toggle-text">{content}</div>;
  }
}

HiddenText.propTypes = {
  buttonText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default HiddenText;
