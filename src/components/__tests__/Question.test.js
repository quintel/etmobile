/* global it expect jest */

import React from 'react';
import { shallowWithIntl, mountWithIntl } from '../../utils/intlEnzymeHelper';

import Question from '../Question';
import ChoiceButton from '../ChoiceButton';

import {
  shouldShowExplanation,
  withExplanations
} from '../../utils/explanations';

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
  const wrapper = shallowWithIntl(
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
  const wrapper = mountWithIntl(
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
  const wrapper = mountWithIntl(
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
  const wrapper = mountWithIntl(
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

it('requires "next question" button with explanations on', () => {
  withExplanations(true, () => {
    const onChoiceMade = jest.fn();

    const wrapper = mountWithIntl(
      <Question
        code="abcdef"
        name="My Question"
        description={{ __html: 'Hello there' }}
        choices={choicesFixture()}
        onChoiceMade={onChoiceMade}
      />
    );

    wrapper.instance().onChoiceSelected(0);
    expect(onChoiceMade).toHaveBeenCalledTimes(0);

    wrapper.find('.dismiss-explanation button').simulate('click');
    expect(onChoiceMade).toHaveBeenCalledTimes(1);
  });
});

it('does not require "next question" button with explanations off', () => {
  withExplanations(false, () => {
    const onChoiceMade = jest.fn();

    const wrapper = mountWithIntl(
      <Question
        code="abcdef"
        name="My Question"
        description={{ __html: 'Hello there' }}
        choices={choicesFixture()}
        onChoiceMade={onChoiceMade}
      />
    );

    wrapper.instance().onChoiceSelected(0);
    expect(onChoiceMade).toHaveBeenCalledTimes(1);

    expect(wrapper.find('.dismiss-explanation').length).toEqual(0);
  });
});

it('permits disabling the "next question" button', () => {
  withExplanations(true, () => {
    const wrapper = mountWithIntl(
      <Question
        code="abcdef"
        name="My Question"
        description={{ __html: 'Hello there' }}
        choices={choicesFixture()}
        onChoiceMade={() => {}}
      />
    );

    wrapper.instance().onChoiceSelected(0);

    expect(shouldShowExplanation()).toEqual(true);

    const checkbox = wrapper.find(
      '.dismiss-explanation input[type="checkbox"]'
    );

    checkbox.simulate('change', { target: { checked: true } });

    expect(shouldShowExplanation()).toEqual(false);
  });
});

it('does not permit answering more than once', () => {
  const onChoiceMade = jest.fn();

  const wrapper = mountWithIntl(
    <Question
      code="abcdef"
      name="My Question"
      description={{ __html: 'Hello there' }}
      choices={choicesFixture()}
      onChoiceMade={onChoiceMade}
    />
  );

  wrapper.instance().onChoiceSelected(0);
  expect(wrapper.instance().state.choice).toEqual(0);

  wrapper.instance().onChoiceSelected(1);
  expect(wrapper.instance().state.choice).toEqual(0);

  wrapper.find('.dismiss-explanation button').simulate('click');
  wrapper.find('.dismiss-explanation button').simulate('click');

  expect(onChoiceMade).toHaveBeenCalledTimes(1);
});

it('renders an incorrectly-chosen question button', () => {
  const wrapper = mountWithIntl(
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
