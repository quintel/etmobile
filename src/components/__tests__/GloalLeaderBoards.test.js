/* global it expect jest */

import React from 'react';
import { Tab } from 'react-tabs';
import { FormattedMessage } from 'react-intl';

import { shallowWithIntl } from '../../utils/intlEnzymeHelper';

import GlobalLeaderBoards from '../GlobalLeaderBoards';
import LeaderBoard from '../LeaderBoard';

const mockBase = () => ({
  bindToState: jest.fn(),
  removeBinding: jest.fn()
});

it('renders tabs for each leaderboard', () => {
  const wrapper = shallowWithIntl(
    <GlobalLeaderBoards base={mockBase()} />
  );

  expect(wrapper.find(Tab).length).toEqual(3);

  const tabMessage = index => (
    wrapper.find(Tab).at(index).find(FormattedMessage).props().id
  );

  expect(tabMessage(0)).toEqual('game.difficultyEasy');
  expect(tabMessage(1)).toEqual('game.difficultyMedium');
  expect(tabMessage(2)).toEqual('game.difficultyHard');
});

it('renders three leaderboards', () => {
  const wrapper = shallowWithIntl(
    <GlobalLeaderBoards base={mockBase()} />
  );

  expect(wrapper.find(LeaderBoard).length).toEqual(3);
});
