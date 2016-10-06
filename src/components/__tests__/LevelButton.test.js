/* global it expect jest */

import React from 'react';
import { shallow } from 'enzyme';

import LevelButton from '../LevelButton';

it('renders an active button', () => {
  const wrapper = shallow(
    <LevelButton active onClick={() => {}}>
      My Button
    </LevelButton>
  );

  expect(wrapper.text()).toEqual('My Button');
  expect(wrapper.find('button').length).toEqual(1);
  expect(wrapper.find('.active').length).toEqual(1);
});

it('renders an inactive button', () => {
  const wrapper = shallow(
    <LevelButton onClick={() => {}}>
      My Button
    </LevelButton>
  );

  expect(wrapper.text()).toEqual('My Button');
  expect(wrapper.find('button').length).toEqual(1);
  expect(wrapper.find('.active').length).toEqual(0);
});

it('binds the onClick listener', () => {
  const onClick = jest.fn();

  const wrapper = shallow(
    <LevelButton onClick={onClick}>
      My Button
    </LevelButton>
  );

  wrapper.simulate('click');

  expect(onClick).toHaveBeenCalled();
});
