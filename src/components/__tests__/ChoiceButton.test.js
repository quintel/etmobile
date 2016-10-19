/* global it expect jest */

import React from 'react';
import { shallow } from 'enzyme';

import ChoiceButton from '../ChoiceButton';

it('renders an active button', () => {
  const wrapper = shallow(
    <ChoiceButton active onClick={() => {}} index={0}>
      My Button
    </ChoiceButton>
  );

  expect(wrapper.text()).toEqual('My Button');
  expect(wrapper.find('button').length).toEqual(1);
  expect(wrapper.find('.active').length).toEqual(1);
});

it('renders an inactive button', () => {
  const wrapper = shallow(
    <ChoiceButton onClick={() => {}} index={0}>
      My Button
    </ChoiceButton>
  );

  expect(wrapper.text()).toEqual('My Button');
  expect(wrapper.find('button').length).toEqual(1);
  expect(wrapper.find('.active').length).toEqual(0);
});

it('binds the onClick listener', () => {
  const onClick = jest.fn();

  const wrapper = shallow(
    <ChoiceButton onClick={onClick} index={0}>
      My Button
    </ChoiceButton>
  );

  wrapper.simulate('click');

  expect(onClick).toHaveBeenCalled();
});
