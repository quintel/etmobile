/* global it expect jest afterEach */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { shallowWithIntl, mountWithIntl } from '../../utils/intlEnzymeHelper';

import Summary from '../Summary';

import {
  clearPlayerName,
  getPlayerName,
  setPlayerName
} from '../../utils/playerName';

const mockBase = () => ({ update: jest.fn() });

const state = (correctChoices, isCorrect = false) => ({
  answeredQuestions: [{ name: 'A > B?', selected: { isCorrect }, choices: [] }],
  correctChoices
});

afterEach(clearPlayerName);

it('renders without errors', () => {
  const wrapper = shallowWithIntl(
    <Summary
      base={mockBase()}
      gameState={state(1)}
      intl={{ formatMessage: ({ id }) => id }}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  const msg = wrapper.find('h1').find(FormattedMessage);

  expect(msg.props().id).toEqual('summary.header');
});

it('renders a custom message when no choices are correct', () => {
  const wrapper = mountWithIntl(
    <Summary
      base={mockBase()}
      gameState={state(0)}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  expect(wrapper.find('.result').text().includes(
    'You made no correct choices'
  )).toEqual(true);
});

it('renders a custom message when one choice is correct', () => {
  const wrapper = mountWithIntl(
    <Summary
      base={mockBase()}
      gameState={state(1)}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  const text = wrapper.find('.result').find(FormattedMessage).text();

  expect(text.includes('You made one correct choice')).toEqual(true);
  expect(text.includes('You made one correct choices')).not.toEqual(true);
});

it('renders a custom message when more than one choice is correct', () => {
  const wrapper = mountWithIntl(
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
  const wrapper = shallowWithIntl(
    <Summary
      base={mockBase()}
      gameState={state(2, false)}
      intl={{ formatMessage: ({ id }) => id }}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  const msg = wrapper.find('.result').find(FormattedMessage);

  expect(msg.props().id).toEqual('summary.numberCorrect');
  expect(msg.props().values.correct).toEqual(2);
});

it('tells the visitor when all choices were correct', () => {
  const wrapper = shallowWithIntl(
    <Summary
      base={mockBase()}
      gameState={state(2, true)}
      intl={{ formatMessage: ({ id }) => id }}
      onRestartGame={() => {}}
      uid="user"
    />
  );

  const msg = wrapper.find('.result').find(FormattedMessage);

  expect(msg.props().id).toEqual('summary.allCorrect');
});

/**
 * Player names.
 */

it('sends the player name without a challenge ID', () => {
  const base = mockBase();

  const wrapper = shallowWithIntl(
    <Summary
      base={base}
      gameState={state(2, true)}
      intl={{ formatMessage: ({ id }) => id }}
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

  const wrapper = shallowWithIntl(
    <Summary
      base={base}
      gameState={state(2, true)}
      intl={{ formatMessage: ({ id }) => id }}
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

  const wrapper = shallowWithIntl(
    <Summary
      base={base}
      gameState={state(2, true)}
      intl={{ formatMessage: ({ id }) => id }}
      onRestartGame={() => {}}
      challengeId="abc"
      uid="user"
    />
  );

  wrapper.instance().onChangePlayerName({ target: { value: '' } });

  expect(base.update.mock.calls.length).toEqual(2);
  expect(getPlayerName()).toEqual(null);
});
