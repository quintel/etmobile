import React, { PropTypes } from 'react';
import Input from './Input';

const InputList = props => (
  <div className="input-list">
    {props.inputs.map(input => (
      <Input
        key={input.code}
        code={input.code}
        name={input.name}
        description={input.description}
      />
    ))}
  </div>
);

InputList.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape(Input.propTypes)).isRequired
};

export default InputList;
