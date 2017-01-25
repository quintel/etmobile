/* global it expect jest */

import React from 'react';
import { MemoryRouter } from 'react-router';
import { mountWithIntl } from '../../utils/intlEnzymeHelper';

import Challenge from '../Challenge';
import LeaderBoard from '../LeaderBoard';

const mockBase = () => ({
  bindToState: jest.fn(),
  removeBinding: jest.fn()
});

it('renders a challenge', () => {
  // MemoryRouter is required to provide <Link /> with router context.
  const wrapper = mountWithIntl(
    <MemoryRouter>
      <Challenge
        base={mockBase()}
        expires={new Date(new Date().getTime() + 1000)}
        id="abc"
        modeName="easy"
        name="My first challenge"
      />
    </MemoryRouter>
  );

  const challenge = wrapper.find('.challenge');

  expect(challenge.text()).toContain('My first challenge');
  expect(wrapper.find(LeaderBoard).length).toEqual(0);
});

it('shows the leaderboard when clicking "Leaderboard"', () => {
  const wrapper = mountWithIntl(
    <MemoryRouter>
      <Challenge
        base={mockBase()}
        expires={new Date(new Date().getTime() + 1000)}
        id="abc"
        modeName="easy"
        name="My first challenge"
      />
    </MemoryRouter>
  );

  wrapper.find('button').simulate('click');

  expect(wrapper.find(LeaderBoard).length).toEqual(1);
});
