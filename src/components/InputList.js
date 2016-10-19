import React, { PropTypes } from 'react';
import Input from './Input';

const InputList = props => (
  <div>
    <div className="input-list">
      {props.inputs.map(input => (
        <Input
          key={input.code}
          code={input.code}
          name={input.name}
          levels={input.levels}
          image={input.image}
          description={input.description}
          onUpdateInput={props.onUpdateInput}
          isLoading={props.isLoading}
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
