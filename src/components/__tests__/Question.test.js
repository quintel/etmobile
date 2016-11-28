/* global it expect jest */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Question from '../Question';
import ChoiceButton from '../ChoiceButton';

const choicesFixture = () => ([
  {
    name: 'Zero',
    icon: 'wind',
    inputs: { abcdef: 0 },
    description: 'Hello',
    isCorrect: true,
    delta: 1
  },
  {
    name: 'Low',
    icon: 'wind',
    description: 'World',
    inputs: { abcdef: 2 },
    delta: 2
  }
]);

it('renders the name of the question', () => {
  const wrapper = shallow(
    <Question
      code="abcdef"
      name="My Question"
      choices={choicesFixture()}
      onChoiceMade={() => {}}
    />
  );

  expect(wrapper.find('h1').text()).toEqual('My Question');
});

it('renders the description', () => {
  const wrapper = mount(
    <Question
      code="abcdef"
      name="My Question"
      choices={choicesFixture()}
      onChoiceMade={() => {}}
    />
  );

  expect(wrapper.find('.description').at(0).text()).toEqual('Hello');
  expect(wrapper.find('.description').at(1).text()).toEqual('World');
});

it('renders two question buttons', () => {
  const wrapper = shallow(
    <Question
      code="abcdef"
      name="My Question"
      description={{ __html: 'Hello there' }}
      choices={choicesFixture()}
      onChoiceMade={() => {}}
    />
  );

  const buttons = wrapper.find(ChoiceButton);

  expect(buttons.length).toEqual(2);

  expect(buttons.get(0).props.children).toEqual('Zero');
  expect(buttons.get(1).props.children).toEqual('Low');
});

it('renders a correctly-chosen question button', () => {
  const wrapper = mount(
    <Question
      code="abcdef"
      name="My Question"
      description={{ __html: 'Hello there' }}
      choices={choicesFixture()}
      onChoiceMade={() => {}}
    />
  );

  wrapper.instance().onChoiceSelected(0);

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
    <Question
      code="abcdef"
      name="My Question"
      description={{ __html: 'Hello there' }}
      choices={choicesFixture()}
      onChoiceMade={() => {}}
    />
  );

  wrapper.instance().onChoiceSelected(1);

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
