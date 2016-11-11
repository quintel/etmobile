/* global it expect */

import React from 'react';
import { shallow } from 'enzyme';

import Summary from '../Summary';

const state = (correctChoices, isCorrect = false) => ({
  lastChoice: { isCorrect },
  correctChoices
});

it('renders without errors', () => {
  const wrapper = shallow(
    <Summary gameState={state(1)} onRestartGame={() => {}} />
  );

  expect(wrapper.find('h1').text()).toEqual('Oops!');
});

it('renders a custom message when no choices are correct', () => {
  const wrapper = shallow(
    <Summary gameState={state(0)} onRestartGame={() => {}} />
  );

  expect(wrapper.find('.leaderboard').text().includes(
    'You didn\'t make any correct choices'
  )).toEqual(true);
});

it('renders a custom message when one choice is correct', () => {
  const wrapper = shallow(
    <Summary gameState={state(1)} onRestartGame={() => {}} />
  );

  const text = wrapper.find('.leaderboard').text();

  expect(text.includes('You made 1 correct choice')).toEqual(true);
  expect(text.includes('You made 1 correct choices')).not.toEqual(true);
});

it('renders a custom message when more than one choice is correct', () => {
  const wrapper = shallow(
    <Summary gameState={state(2)} onRestartGame={() => {}} />
  );

  expect(wrapper.find('.leaderboard').text().includes(
    'You made 2 correct choices'
  )).toEqual(true);
});

it('tells the visitor when their choice was incorrect', () => {
  const wrapper = shallow(
    <Summary gameState={state(2, false)} onRestartGame={() => {}} />
  );

  expect(wrapper.find('h1').text()).toEqual('Oops!');
});

it('tells the visitor when all choices were correct', () => {
  const wrapper = shallow(
    <Summary gameState={state(2, true)} onRestartGame={() => {}} />
  );

  expect(wrapper.find('h1').text()).toEqual('Wow!');
});
