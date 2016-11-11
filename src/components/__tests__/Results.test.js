/* global it expect */

import React from 'react';
import { shallow } from 'enzyme';

import Results from '../Results';

const state = correctChoices => ({ correctChoices });

it('renders without errors', () => {
  const wrapper = shallow(<Results gameState={state(1)} />);

  expect(wrapper.find('h1').text()).toEqual('Oops!');
});

it('renders a custom message when no choices are correct', () => {
  const wrapper = shallow(<Results gameState={state(0)} />);

  expect(wrapper.find('.leaderboard').text().includes(
    'You didn\'t make any correct choices'
  )).toEqual(true);
});

it('renders a custom message when one choice is correct', () => {
  const wrapper = shallow(<Results gameState={state(1)} />);
  const text = wrapper.find('.leaderboard').text();

  expect(text.includes('You made 1 correct choice')).toEqual(true);
  expect(text.includes('You made 1 correct choices')).not.toEqual(true);
});

it('renders a custom message when more than one choice is correct', () => {
  const wrapper = shallow(<Results gameState={state(2)} />);

  expect(wrapper.find('.leaderboard').text().includes(
    'You made 2 correct choices'
  )).toEqual(true);
});
