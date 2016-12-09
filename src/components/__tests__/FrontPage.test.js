/* global it expect */

import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';

import FrontPage from '../FrontPage';
import LeaderBoard from '../LeaderBoard';

const mockBase = () => ({
  bindToState: () => {},
  removeBinding: () => {}
});

it('renders a link to the play page', () => {
  const wrapper = shallow(<FrontPage base={mockBase()} />);
  const link = wrapper.find(Link).at(0);

  expect(link.props().to).toEqual('/play');
});

it('renders a leaderboard', () => {
  const wrapper = shallow(<FrontPage base={mockBase()} />);

  expect(wrapper.find(LeaderBoard).length).toEqual(1);
});
