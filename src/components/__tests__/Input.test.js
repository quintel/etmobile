/* global it expect jest */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from '../Input';
import ChoiceButton from '../ChoiceButton';

const choicesFixture = () => ({
  inputs: ['abcdef'],
  choices: [
    { name: 'Zero', values: [0] },
    { name: 'Low', values: [2], default: true },
    { name: 'Medium', values: [4] },
    { name: 'High', values: [6] }
  ]
});

it('renders the name of the input', () => {
  const wrapper = shallow(
    <Input
      code="abcdef"
      name="My Input"
      description={{ __html: 'Hello there!' }}
      {...choicesFixture()}
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
      {...choicesFixture()}
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
      {...choicesFixture()}
    />
  );

  const buttons = wrapper.find(ChoiceButton);

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
      {...choicesFixture()}
    />
  );

  const buttons = wrapper.find(ChoiceButton);

  expect(buttons.get(0).props.active).toEqual(false);
  expect(buttons.get(1).props.active).toEqual(true);
  expect(buttons.get(2).props.active).toEqual(false);
  expect(buttons.get(3).props.active).toEqual(false);
});

it('calls onUpdateInput when a new level is selected', () => {
  const onUpdateInput = jest.fn();

  const wrapper = mount(
    <Input
      code="abcdef"
      name="My Input"
      description={{ __html: 'Hello there' }}
      onUpdateInput={onUpdateInput}
      {...choicesFixture()}
    />
  );

  wrapper.instance().handleChoiceChange(3);

  expect(onUpdateInput).toHaveBeenCalled();
});

it('calls onUpdateInput when the same level is selected', () => {
  const onUpdateInput = jest.fn();

  const wrapper = mount(
    <Input
      code="abcdef"
      name="My Input"
      description={{ __html: 'Hello there' }}
      onUpdateInput={onUpdateInput}
      {...choicesFixture()}
    />
  );

  wrapper.instance().handleChoiceChange(1);

  expect(onUpdateInput).not.toHaveBeenCalled();
});

it('includes a background image when an image is specified', () => {
  const wrapper = shallow(
    <Input
      code="abcdef"
      name="My Input"
      image="electric_cars.png"
      description={{ __html: 'Hello there' }}
      {...choicesFixture()}
    />
  );

  const styleAttrs = wrapper.closest('.input').prop('style');

  expect(Object.keys(styleAttrs).includes('backgroundImage')).toEqual(true);
  expect(styleAttrs.backgroundImage.includes('url(')).toEqual(true);
});

it('has no background image when no image is specified', () => {
  const wrapper = shallow(
    <Input
      code="abcdef"
      name="My Input"
      description={{ __html: 'Hello there' }}
      {...choicesFixture()}
    />
  );

  const styleAttrs = wrapper.closest('.input').prop('style');

  expect(styleAttrs.backgroundImage).toEqual(null);
});
