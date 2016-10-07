/* global it expect jest */

import React from 'react';
import { shallow } from 'enzyme';

import InputList from '../InputList';
import Input from '../Input';

it('renders an empty InputList', () => {
  const wrapper = shallow(<InputList inputs={[]} />);

  expect(wrapper.find('.input-list').length).toEqual(1);
  expect(wrapper.find(Input).length).toEqual(0);
});

it('renders an InputList with two inputs', () => {
  const inputs = [
    { code: 'abc', name: 'Input 1', description: { __html: '' }, levels: [] },
    { code: 'def', name: 'Input 2', description: { __html: '' }, levels: [] }
  ];

  const wrapper = shallow(<InputList inputs={inputs} />);
  const inputEls = wrapper.find(Input);

  expect(wrapper.find('.input-list').length).toEqual(1);
  expect(inputEls.length).toEqual(2);

  expect(inputEls.get(0).props.code).toEqual('abc');
  expect(inputEls.get(0).props.name).toEqual('Input 1');

  expect(inputEls.get(1).props.code).toEqual('def');
  expect(inputEls.get(1).props.name).toEqual('Input 2');
});
