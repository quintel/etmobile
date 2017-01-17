/* global it expect jest */

import React from 'react';
import { shallowWithIntl, mountWithIntl } from '../../utils/intlEnzymeHelper';

import ChoiceButton from '../ChoiceButton';

it('renders an active button', () => {
  const wrapper = mountWithIntl(
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
  const wrapper = mountWithIntl(
    <ChoiceButton isCorrect selectedIndex={0} index={0}>
      My Button
    </ChoiceButton>
  );

  expect(wrapper.text()).toMatch(/\bcorrect\b/i);
});

it('renders an unchosen, correct button', () => {
  const wrapper = mountWithIntl(
    <ChoiceButton isCorrect selectedIndex={1} index={0}>
      My Button
    </ChoiceButton>
  );

  expect(wrapper.text()).toEqual('My Button');
});

it('renders a chosen, incorrect button', () => {
  const wrapper = mountWithIntl(
    <ChoiceButton selectedIndex={0} index={0}>
      My Button
    </ChoiceButton>
  );

  expect(wrapper.text()).toMatch(/\bincorrect\b/i);
});

it('renders an unchosen, incorrect button', () => {
  const wrapper = mountWithIntl(
    <ChoiceButton selectedIndex={1} index={0}>
      My Button
    </ChoiceButton>
  );

  expect(wrapper.text()).toEqual('My Button');
});

it('binds the onClick listener to the buttons', () => {
  const onClick = jest.fn();

  const wrapper = shallowWithIntl(
    <ChoiceButton onClick={onClick} index={0}>Hello</ChoiceButton>
  );

  wrapper.simulate('click');

  expect(onClick).toHaveBeenCalled();
});
