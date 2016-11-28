/* global it expect jest */

import React from 'react';
import { shallow, mount } from 'enzyme';

import ChoiceButton from '../ChoiceButton';

it('renders an active button', () => {
  const wrapper = mount(
    <ChoiceButton isCorrect onClick={() => {}} index={0}>
      My Button
    </ChoiceButton>
  );

  expect(wrapper.text()).toEqual('My Button');

  const button = wrapper.find('button');

  expect(button.length).toEqual(1);
  expect(button.props().disabled).toEqual(false);
});

it('renders a chosen, correct button', () => {
  const wrapper = mount(
    <ChoiceButton isCorrect selectedIndex={0} index={0}>
      My Button
    </ChoiceButton>
  );

  expect(wrapper.text()).toMatch(/\bcorrect\b/i);
});

it('renders an unchosen, correct button', () => {
  const wrapper = mount(
    <ChoiceButton isCorrect selectedIndex={1} index={0}>
      My Button
    </ChoiceButton>
  );

  expect(wrapper.text()).toEqual('My Button');
});

it('renders a chosen, incorrect button', () => {
  const wrapper = mount(
    <ChoiceButton selectedIndex={0} index={0}>
      My Button
    </ChoiceButton>
  );

  expect(wrapper.text()).toMatch(/\bincorrect\b/i);
});

it('renders an unchosen, incorrect button', () => {
  const wrapper = mount(
    <ChoiceButton selectedIndex={1} index={0}>
      My Button
    </ChoiceButton>
  );

  expect(wrapper.text()).toEqual('My Button');
});

it('binds the onClick listener to the buttons', () => {
  const onClick = jest.fn();

  const wrapper = shallow(
    <ChoiceButton onClick={onClick} index={0}>Hello</ChoiceButton>
  );

  wrapper.simulate('click');

  expect(onClick).toHaveBeenCalled();
});
