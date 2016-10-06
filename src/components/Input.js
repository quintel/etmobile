import React, { PropTypes } from 'react';

const Input = props => (
  <div className="input">
    <strong>{ props.name }</strong>: <code>{props.code}</code>
    <div className="description" dangerouslySetInnerHTML={props.description} />
  </div>
);

Input.propTypes = {
  code: PropTypes.string.isRequired,
  description: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }).isRequired,
  name: PropTypes.string.isRequired
};

export default Input;
