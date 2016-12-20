/* global it expect jest afterEach */

import React from 'react';
import { shallow } from 'enzyme';

import Summary from '../Summary';
import ChoiceSummary from '../ChoiceSummary';

import {
  clearPlayerName,
  getPlayerName,
  setPlayerName
} from '../../utils/playerName';

const mockBase = () => ({ update: jest.fn() });

const state = (correctChoices, isCorrect = false) => ({
  lastChoice: { isCorrect },
  lastQuestion: { choices: [] },
  correctChoices
});

afterEach(clearPlayerName);

it('renders without errors', () => {
  const wrapper = shallow(
    <Summary
      base={mockBase()}
      gameState={state(1)}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  expect(wrapper.find('h1').text()).toEqual('Oops!');
});

it('renders a custom message when no choices are correct', () => {
  const wrapper = shallow(
    <Summary
      base={mockBase()}
      gameState={state(0)}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  expect(wrapper.find('.result').text().includes(
    'You didn\'t make any correct choices'
  )).toEqual(true);
});

it('renders a custom message when one choice is correct', () => {
  const wrapper = shallow(
    <Summary
      base={mockBase()}
      gameState={state(1)}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  const text = wrapper.find('.result').text();

  expect(text.includes('You made 1 correct choice')).toEqual(true);
  expect(text.includes('You made 1 correct choices')).not.toEqual(true);
});

it('renders a custom message when more than one choice is correct', () => {
  const wrapper = shallow(
    <Summary
      base={mockBase()}
      gameState={state(2)}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  expect(wrapper.find('.result').text().includes(
    'You made 2 correct choices'
  )).toEqual(true);
});

it('tells the visitor when their choice was incorrect', () => {
  const wrapper = shallow(
    <Summary
      base={mockBase()}
      gameState={state(2, false)}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  expect(wrapper.find('h1').text()).toEqual('Oops!');
});

it('tells the visitor when all choices were correct', () => {
  const wrapper = shallow(
    <Summary
      base={mockBase()}
      gameState={state(2, true)}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  expect(wrapper.find('h1').text()).toEqual('Wow!');
});

/**
 * Player names.
 */

it('sends the player name without a challenge ID', () => {
  const base = mockBase();

  const wrapper = shallow(
    <Summary
      base={base}
      gameState={state(2, true)}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  wrapper.instance().onChangePlayerName({ target: { value: 'My name' } });

  expect(base.update.mock.calls.length).toEqual(1);
  expect(getPlayerName()).toEqual('My name');
});

it('sends the player name with a challenge ID', () => {
  const base = mockBase();

  const wrapper = shallow(
    <Summary
      base={base}
      gameState={state(2, true)}
      onRestartGame={() => {}}
      challengeId="abc"
      uid="user"
    />
  );

  wrapper.instance().onChangePlayerName({ target: { value: 'My name' } });

  expect(base.update.mock.calls.length).toEqual(2);
  expect(getPlayerName()).toEqual('My name');
});

it('resets the player name when blank', () => {
  setPlayerName('Hello!');

  const base = mockBase();

  const wrapper = shallow(
    <Summary
      base={base}
      gameState={state(2, true)}
      onRestartGame={() => {}}
      challengeId="abc"
      uid="user"
    />
  );

  wrapper.instance().onChangePlayerName({ target: { value: '' } });

  expect(base.update.mock.calls.length).toEqual(2);
  expect(getPlayerName()).toEqual(null);
});

/**
 * Choice summaries
 */

const stateWithSummaries = (firstDelta = -1.0, secondDelta = -0.1) => ({
  correctChoices: 1,
  lastChoice: { isCorrect: true },
  lastQuestion: {
    choices: [{
      icon: 'wind',
      isCorrect: true,
      name: 'First choice',
      description: 'Desc of choice 1',
      delta: firstDelta
    }, {
      icon: 'wind',
      isCorrect: true,
      name: 'Second choice',
      description: 'Desc of choice 2',
      delta: secondDelta
    }]
  }
});

it('renders a list of the question choices', () => {
  const wrapper = shallow(
    <Summary
      base={mockBase()}
      gameState={stateWithSummaries()}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  const summaries = wrapper.find(ChoiceSummary);

  expect(summaries.length).toEqual(2);
  expect(summaries.at(0).props().name).toEqual('First choice');
  expect(summaries.at(1).props().name).toEqual('Second choice');
});

it('sorts choices with the correct answer first', () => {
  const wrapper = shallow(
    <Summary
      base={mockBase()}
      gameState={stateWithSummaries(1.0, -1.0)}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  const summaries = wrapper.find(ChoiceSummary);

  expect(summaries.length).toEqual(2);
  expect(summaries.at(0).props().name).toEqual('Second choice');
  expect(summaries.at(1).props().name).toEqual('First choice');
});
