import React from 'react';
import inputs from '../data/inputs';

const InputList = () => (
  <ul className="input-list">
    {inputs.map(input => (
      <li key={ input.code }>
        <strong>{ input.name }</strong>: <code>{ input.code }</code>
        <div dangerouslySetInnerHTML={ input.description } />
      </li>
    ))}
  </ul>
);

export default InputList;
