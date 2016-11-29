/* global it expect jest */

import React from 'react';
import { mount } from 'enzyme';

import Choice from '../Choice';

const choiceFixture = (isCorrect = true) => ({
  name: 'Zero',
  icon: 'wind',
  description: 'Hello',
  delta: 1,
  isCorrect
});

it('renders a correctly-chosen question button', () => {
  const wrapper = mount(
    <Choice
      choice={choiceFixture()}
      index={1}
      onChoiceSelected={() => {}}
      selectedIndex={1}
    />
  );

  const buttons = wrapper.find('button.correct');

  expect(buttons.length).toEqual(1);
  expect(buttons.props().disabled).toEqual(true);
  expect(buttons.props().className).toMatch(/\bcorrect\b/);

  expect(buttons.props().children).toMatch(/\bcorrect\b/i);
  expect(buttons.props().children).not.toMatch(/\bincorrect\b/i);

  expect(wrapper.find('button[disabled]').length)
    .toEqual(wrapper.find('button').length);

  expect(wrapper.find('button.incorrect').length).toEqual(0);
});

it('renders an incorrectly-chosen question button', () => {
  const wrapper = mount(
    <Choice
      choice={choiceFixture(false)}
      index={1}
      onChoiceSelected={() => {}}
      selectedIndex={1}
    />
  );

  const buttons = wrapper.find('button.incorrect');

  expect(buttons.length).toEqual(1);
  expect(buttons.props().disabled).toEqual(true);
  expect(buttons.props().className).toMatch(/\bincorrect\b/);

  expect(buttons.props().children).not.toMatch(/\bcorrect\b/i);
  expect(buttons.props().children).toMatch(/\bincorrect\b/i);

  expect(wrapper.find('button[disabled]').length)
    .toEqual(wrapper.find('button').length);

  expect(wrapper.find('button.correct').length).toEqual(0);
});
