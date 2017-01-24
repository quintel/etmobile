/* global it expect */

import React from 'react';
import { shallowWithIntl } from '../../utils/intlEnzymeHelper';

import GameChallenge from '../GameChallenge';
import Game from '../Game';

import * as gameModes from '../../data/gameModes';

const stubBase = () => ({ update: () => {}, onAuth: () => {}, auth: () => {} });

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

it('uses the challenge difficulty when given', () => {
  const wrapper = shallowWithIntl(
    <GameChallenge modeName="medium" base={stubBase()} params={{}} />
  );

  wrapper.instance().startWithModeName('hard');

  expect(wrapper.find(Game).props().mode).toEqual(gameModes.hard);
});

it('uses the default difficulty when challenge is invalid', () => {
  const wrapper = shallowWithIntl(
    <GameChallenge base={stubBase()} params={{}} />
  );

  wrapper.instance().startWithModeName('nope');

  expect(wrapper.find(Game).props().mode).toEqual(gameModes.easy);
});
