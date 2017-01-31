/* global it expect jest */

import React from 'react';
import { shallowWithIntl, mountWithIntl } from '../../utils/intlEnzymeHelper';

import GameChallenge from '../GameChallenge';
import Game from '../Game';

import * as gameModes from '../../data/gameModes';

const choices = [
  {
    key: 'closeModernCoal',
    header: 'Choice A',
    name: 'Choice A',
    description: '',
    icon: 'coal',
    inputs: {},
    delta: 1
  },
  {
    key: 'buildOffshoreTurbines',
    header: 'Choice B',
    name: 'Choice B',
    description: '',
    icon: 'wind',
    inputs: {},
    delta: 2
  }
]

const stubBase = () => ({
  fetch: () => {},
  update: jest.fn(),
  onAuth: cb => cb({ uid: 'xyz' }),
  auth: () => ({ signInAnonymously: Promise.resolve({ uid: 'xyz' }) })
});

it('uses the default difficulty when none is provided', () => {
  const wrapper = shallowWithIntl(
    <GameChallenge base={stubBase()} params={{}} />
  );

  wrapper.instance().start();

  expect(wrapper.find(Game).props().mode).toEqual(gameModes.easy);
});

it('uses the defined difficulty when given', () => {
  const wrapper = shallowWithIntl(
    <GameChallenge modeName="medium" base={stubBase()} params={{}} />
  );

  wrapper.instance().start();

  expect(wrapper.find(Game).props().mode).toEqual(gameModes.medium);
});

it('uses the default difficulty when given an invalid mode name', () => {
  const wrapper = shallowWithIntl(
    <GameChallenge modeName="nope" base={stubBase()} params={{}} />
  );

  wrapper.instance().start();

  expect(wrapper.find(Game).props().mode).toEqual(gameModes.easy);
});

it('uses the challenge difficulty when one is returned', () => {
  const base = stubBase();
  const promise = Promise.resolve({ mode: 'hard' });

  base.fetch = jest.fn(() => promise);

  const wrapper = mountWithIntl(
    <GameChallenge
      base={base}
      choices={choices}
      params={{ challengeId: 'abc' }}
    />
  );

  return promise.then(() => {
    expect(base.fetch).toHaveBeenCalled();
    expect(wrapper.find(Game).props().mode).toEqual(gameModes.hard);
  });
});

it('defaults to easy difficulty when a challenge defines no mode', () => {
  const base = stubBase();
  const promise = Promise.resolve({});

  base.fetch = jest.fn(() => promise);

  const wrapper = mountWithIntl(
    <GameChallenge
      base={base}
      choices={choices}
      params={{ challengeId: 'abc' }}
    />
  );

  return promise.then(() => {
    expect(base.fetch).toHaveBeenCalled();
    expect(wrapper.find(Game).props().mode).toEqual(gameModes.easy);
  });
});

it('defaults to easy difficulty when a challenge difficulty is invalid', () => {
  const base = stubBase();
  const promise = Promise.resolve({ mode: 'invalid' });

  base.fetch = jest.fn(() => promise);

  const wrapper = mountWithIntl(
    <GameChallenge
      base={base}
      choices={choices}
      params={{ challengeId: 'nope' }}
    />
  );

  return promise.then(() => {
    expect(base.fetch).toHaveBeenCalled();
    expect(wrapper.find(Game).props().mode).toEqual(gameModes.easy);
  });
});
