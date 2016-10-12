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
          description={input.description}
          onUpdateInput={props.onUpdateInput}
          isLoading={props.scenarioID === undefined}
        />
      ))}
    </div>
  </div>
);

InputList.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape(Input.propTypes)).isRequired,
  scenarioID: PropTypes.number,
  onUpdateInput: PropTypes.func.isRequired
};

export default InputList;
