/* global it expect jest */

import React from 'react';
import { mountWithIntl, shallowWithIntl } from '../../utils/intlEnzymeHelper';

import LeaderBoard from '../LeaderBoard';

const mockBase = () => ({
  bindToState: jest.fn(),
  removeBinding: jest.fn()
});

it('renders a title, when set', () => {
  const wrapper = shallowWithIntl(
    <LeaderBoard title="My leaderboard" base={mockBase()} endpoint="all" />
  );

  expect(wrapper.find('h2').length).toEqual(1);
  expect(wrapper.find('h2').text()).toEqual('My leaderboard');
});

it('renders no title by default', () => {
  const wrapper = shallowWithIntl(
    <LeaderBoard base={mockBase()} endpoint="all" />
  );

  expect(wrapper.find('h6').length).toEqual(0);
});

it('binds to the Firebase endpoint when mounting', () => {
  const base = mockBase();

  mountWithIntl(<LeaderBoard base={base} endpoint="all" />);

  expect(base.bindToState).toHaveBeenCalled();
  expect(base.bindToState.mock.calls[0][0]).toEqual('leaderboards/all');
});

it('removes the Firebase binding when unmounting', () => {
  const base = mockBase();
  const wrapper = mountWithIntl(<LeaderBoard base={base} endpoint="all" />);

  wrapper.unmount();

  expect(base.removeBinding).toHaveBeenCalled();
});

it('initially renders a loading message', () => {
  const base = mockBase();
  const wrapper = mountWithIntl(<LeaderBoard base={base} endpoint="all" />);

  expect(wrapper.text()).toContain('Loading');
});

it('renders the results', () => {
  const base = mockBase();
  const wrapper = mountWithIntl(<LeaderBoard base={base} endpoint="all" />);

  wrapper.setState({ results: [
    { at: new Date().getTime() - (60.4 * 1000), score: 3, key: 'def' },
    { at: new Date().getTime() - (10.4 * 1000), score: 4, key: 'abc' },
    { at: new Date().getTime() - (120.4 * 1200), score: 2, key: 'hij' },
    { at: new Date().getTime() - (180.4 * 1200), score: 1, key: 'klm' }
  ] });

  expect(wrapper.find('li').length).toEqual(4);

  const first = wrapper.find('li').at(0);
  const second = wrapper.find('li').at(1);
  const third = wrapper.find('li').at(2);
  const fourth = wrapper.find('li').at(3);

  expect(first.find('.at').text()).toContain('got 4 correct');

  expect(second.find('.at').text()).toContain('got 3 correct');

  expect(third.find('.at').text()).toContain('got 2 correct');
  expect(fourth.find('.at').text()).toContain('got 1 correct');

  // Trophy images for the first three.
  expect(first.find('img').length).toEqual(1);
  expect(second.find('img').length).toEqual(1);
  expect(third.find('img').length).toEqual(1);

  // Numbers for the rest.
  expect(fourth.find('img').length).toEqual(0);
  expect(fourth.find('.position').text()).toEqual('4');
});

it('sorts equal-score results to be recent-first', () => {
  const base = mockBase();
  const wrapper = mountWithIntl(<LeaderBoard base={base} endpoint="all" />);

  wrapper.setState({ results: [
    { at: new Date().getTime() - (60 * 1000), score: 2, key: 'a', who: 'abc' },
    { at: new Date().getTime() - (120 * 1200), score: 2, key: 'b', who: 'def' },
    { at: new Date().getTime() - (30 * 1200), score: 2, key: 'c', who: 'hij' }
  ] });

  expect(wrapper.find('li').length).toEqual(3);

  const first = wrapper.find('li').at(0);
  const second = wrapper.find('li').at(1);
  const third = wrapper.find('li').at(2);

  expect(first.find('.visitor').text()).toContain('hij');
  expect(second.find('.visitor').text()).toContain('abc');
  expect(third.find('.visitor').text()).toContain('def');
});

it('renders a message when there are no games played', () => {
  const base = mockBase();
  const wrapper = mountWithIntl(<LeaderBoard base={base} endpoint="all" />);

  wrapper.setState({ results: [] });

  expect(wrapper.text()).toContain('No players yet');
});
