import React, { PropTypes } from 'react';
import Input from './Input';

const InputList = props => (
  <div>
    <div className="input-list">
      {props.inputs.map((input, index) => (
        <Input
          key={index}
          {...input}
          isLoading={props.isLoading}
          onUpdateInput={props.onUpdateInput}
        />
      ))}
    </div>
  </div>
);

InputList.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape(Input.propTypes)).isRequired,
  isLoading: PropTypes.bool,
  onUpdateInput: PropTypes.func.isRequired
};

export default InputList;
