/* global it expect jest */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Question, { ChoiceButton } from '../Question';

const choicesFixture = () => ({
  inputs: ['abcdef'],
  choices: [
    { name: 'Zero', icon: 'wind', values: [0], isCorrect: true },
    { name: 'Low', icon: 'wind', values: [2] }
  ]
});

it('renders the name of the question', () => {
  const wrapper = shallow(
    <Question
      code="abcdef"
      name="My Question"
      description={{ __html: 'Hello there!' }}
      onChoiceMade={() => {}}
      {...choicesFixture()}
    />
  );

  expect(wrapper.find('h1').text()).toEqual('My Question');
});

it('renders the description', () => {
  const wrapper = mount(
    <Question
      code="abcdef"
      name="My Question"
      description={{ __html: 'Hello there' }}
      onChoiceMade={() => {}}
      {...choicesFixture()}
    />
  );

  expect(wrapper.find('.description').text()).toEqual('Hello there');
});

it('renders two question buttons', () => {
  const wrapper = shallow(
    <Question
      code="abcdef"
      name="My Question"
      description={{ __html: 'Hello there' }}
      onChoiceMade={() => {}}
      {...choicesFixture()}
    />
  );

  const buttons = wrapper.find(ChoiceButton);

  expect(buttons.length).toEqual(2);

  expect(buttons.get(0).props.name).toEqual('Zero');
  expect(buttons.get(1).props.name).toEqual('Low');
});

it('renders a correctly-chosen question button', () => {
  const wrapper = mount(
    <Question
      code="abcdef"
      name="My Question"
      description={{ __html: 'Hello there' }}
      onChoiceMade={() => {}}
      {...choicesFixture()}
    />
  );

  wrapper.instance().onChoiceSelected(0);

  const buttons = wrapper.find('button.correct');

  expect(buttons.length).toEqual(1);
  expect(buttons.props().disabled).toEqual(true);
  expect(buttons.props().className).toEqual('correct');

  expect(buttons.props().children.find(
    child => child.match(/\bcorrect\b/i))
  ).not.toEqual(undefined);

  expect(buttons.props().children.find(
    child => child.match(/\bincorrect\b/i))
  ).toEqual(undefined);

  expect(wrapper.find('button[disabled]').length).toEqual(2);
  expect(wrapper.find('button.incorrect').length).toEqual(0);
});


it('renders an incorrectly-chosen question button', () => {
  const wrapper = mount(
    <Question
      code="abcdef"
      name="My Question"
      description={{ __html: 'Hello there' }}
      onChoiceMade={() => {}}
      {...choicesFixture()}
    />
  );

  wrapper.instance().onChoiceSelected(1);

  const buttons = wrapper.find('button.incorrect');

  expect(buttons.length).toEqual(1);
  expect(buttons.props().disabled).toEqual(true);
  expect(buttons.props().className).toEqual('incorrect');

  expect(buttons.props().children.find(
    child => child.match(/\bincorrect\b/i))
  ).not.toEqual(undefined);

  expect(buttons.props().children.find(
    child => child.match(/\bcorrect\b/i))
  ).toEqual(undefined);

  expect(wrapper.find('button[disabled]').length).toEqual(2);
  expect(wrapper.find('button.correct').length).toEqual(0);
});

it('binds the onClick listener to the buttons', () => {
  const onClick = jest.fn();

  const wrapper = shallow(
    <ChoiceButton name="Hello" onClick={onClick} index={0} />
  );

  wrapper.simulate('click');

  expect(onClick).toHaveBeenCalled();
});
