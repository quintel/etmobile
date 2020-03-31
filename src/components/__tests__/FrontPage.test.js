/* global it expect */

import React from 'react';
import { Link } from 'react-router-dom';
import { shallowWithIntl } from '../../utils/intlEnzymeHelper';

import FrontPage from '../FrontPage';
import GlobalLeaderBoards from '../GlobalLeaderBoards';

const mockBase = () => ({
  bindToState: () => {},
  removeBinding: () => {},
  fetch: () => {}
});

it('renders a link to the play page', () => {
  const wrapper = shallowWithIntl(
    <FrontPage
      base={mockBase()}
      intl={{ formatMessage: ({ id }) => id }}
      setLocale={() => {}}
    />
  );

  const link = wrapper.find(Link).at(0);

  expect(link.props().to).toEqual('/play');
});

it('renders a global leaderboard', () => {
  const wrapper = shallowWithIntl(
    <FrontPage
      base={mockBase()}
      intl={{ formatMessage: ({ id }) => id }}
      setLocale={() => {}}
    />
  );

  expect(wrapper.find(GlobalLeaderBoards).length).toEqual(1);
});
