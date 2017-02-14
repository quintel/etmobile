/* global it expect jest */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Chooser from '../Chooser';

it('renders an active button', () => {
  const wrapper = mount(
    <Chooser isCorrect onClick={() => {}} index={0}>
      My Button
    </Chooser>
  );

  expect(wrapper.text()).toEqual('My Button');
  expect(wrapper.find('button').length).toEqual(1);
  expect(wrapper.find('button').props().disabled).toEqual(false);
});

it('renders a chosen, correct button', () => {
  const wrapper = mount(
    <Chooser isCorrect selectedIndex={0} index={0}>
      My Button
    </Chooser>
  );

  expect(wrapper.text()).toEqual('My Button');

  const button = wrapper.find('button');

  expect(button.length).toEqual(1);
  expect(button.props().className).toMatch(/\b(in)?correct\b/);
  expect(button.props().disabled).toEqual(true);
});

it('renders an unchosen, correct button', () => {
  const wrapper = mount(
    <Chooser isCorrect selectedIndex={1} index={0}>
      My Button
    </Chooser>
  );

  expect(wrapper.text()).toEqual('My Button');

  const button = wrapper.find('button');

  expect(button.length).toEqual(1);
  expect(button.props().className).not.toMatch(/\b(in)?correct\b/);
  expect(button.props().disabled).toEqual(true);
});

it('renders a chosen, incorrect button', () => {
  const wrapper = mount(
    <Chooser selectedIndex={0} index={0}>
      My Button
    </Chooser>
  );

  const button = wrapper.find('button');

  expect(button.length).toEqual(1);
  expect(button.props().className).toMatch(/\b(in)?correct\b/);
  expect(button.props().disabled).toEqual(true);
});

it('renders an unchosen, incorrect button', () => {
  const wrapper = mount(
    <Chooser selectedIndex={1} index={0}>
      My Button
    </Chooser>
  );

  expect(wrapper.text()).toEqual('My Button');

  const button = wrapper.find('button');

  expect(button.length).toEqual(1);
  expect(button.props().className).not.toMatch(/\b(in)?correct\b/);
  expect(button.props().disabled).toEqual(true);
});

it('binds the onClick listener to the buttons', () => {
  const onClick = jest.fn();
  const preventDefault = jest.fn();

  const wrapper = shallow(
    <Chooser onClick={onClick} index={0}>Hello</Chooser>
  );

  wrapper.simulate('click', { preventDefault });

  expect(onClick).toHaveBeenCalled();
  expect(preventDefault).toHaveBeenCalled();
});
