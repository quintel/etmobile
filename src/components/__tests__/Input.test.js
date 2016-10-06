/* global it expect jest */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from '../Input';
import LevelButton from '../LevelButton';

it('renders the name of the input', () => {
  const wrapper = shallow(
    <Input
      code="abcdef"
      name="My Input"
      description={{ __html: 'Hello there!' }}
    />
  );

  expect(wrapper.find('.name').text()).toEqual('My Input');
});

it('renders the description', () => {
  const wrapper = mount(
    <Input
      code="abcdef"
      name="My Input"
      description={{ __html: 'Hello there' }}
    />
  );

  expect(wrapper.find('.description').text()).toEqual('Hello there');
});

it('renders four level buttons', () => {
  const wrapper = shallow(
    <Input
      code="abcdef"
      name="My Input"
      description={{ __html: 'Hello there' }}
    />
  );

  const buttons = wrapper.find(LevelButton);

  expect(buttons.length).toEqual(4);

  expect(buttons.get(0).props.children).toEqual('Zero');
  expect(buttons.get(1).props.children).toEqual('Low');
  expect(buttons.get(2).props.children).toEqual('Medium');
  expect(buttons.get(3).props.children).toEqual('High');
});

it('defaults the "Low" button to be active', () => {
  const wrapper = shallow(
    <Input
      code="abcdef"
      name="My Input"
      description={{ __html: 'Hello there' }}
    />
  );

  const buttons = wrapper.find(LevelButton);

  expect(buttons.get(0).props.active).toEqual(false);
  expect(buttons.get(1).props.active).toEqual(true);
  expect(buttons.get(2).props.active).toEqual(false);
  expect(buttons.get(3).props.active).toEqual(false);
});
