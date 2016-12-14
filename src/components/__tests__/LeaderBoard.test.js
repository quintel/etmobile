/* global it expect jest */

import React from 'react';
import { shallow, mount } from 'enzyme';

import LeaderBoard from '../LeaderBoard';

const mockBase = () => ({
  bindToState: jest.fn(),
  removeBinding: jest.fn()
});

it('renders a title, when set', () => {
  const wrapper = shallow(
    <LeaderBoard title="My leaderboard" base={mockBase()} endpoint="all" />
  );

  expect(wrapper.find('h6').length).toEqual(1);
  expect(wrapper.find('h6').text()).toEqual('My leaderboard');
});

it('renders no title by default', () => {
  const wrapper = shallow(
    <LeaderBoard base={mockBase()} endpoint="all" />
  );

  expect(wrapper.find('h6').length).toEqual(0);
});

it('binds to the Firebase endpoint when mounting', () => {
  const base = mockBase();

  mount(<LeaderBoard base={base} endpoint="all" />);

  expect(base.bindToState).toHaveBeenCalled();
  expect(base.bindToState.mock.calls[0][0]).toEqual('leaderboards/all');
});

it('removes the Firebase binding when unmounting', () => {
  const base = mockBase();
  const wrapper = mount(<LeaderBoard base={base} endpoint="all" />);

  wrapper.unmount();

  expect(base.removeBinding).toHaveBeenCalled();
});

it('initially renders a loading message', () => {
  const base = mockBase();
  const wrapper = mount(<LeaderBoard base={base} endpoint="all" />);

  expect(wrapper.text()).toContain('Loading');
});

it('renders the results', () => {
  const base = mockBase();
  const wrapper = mount(<LeaderBoard base={base} endpoint="all" />);

  wrapper.setState({ results: [
    { at: new Date().getTime() - (60 * 1000), score: 3, key: 'def' },
    { at: new Date().getTime(), score: 4, key: 'abc' },
    { at: new Date().getTime() - (120 * 1200), score: 2, key: 'hij' }
  ] });

  expect(wrapper.find('li').length).toEqual(3);

  const first = wrapper.find('li').at(0);
  const second = wrapper.find('li').at(1);
  const third = wrapper.find('li').at(2);

  expect(first.find('.position').text()).toEqual('1');
  expect(first.find('.visitor').text()).toContain('got 4 correct');
  expect(first.find('.at').text()).toContain('less than a minute');

  expect(second.find('.position').text()).toEqual('2');
  expect(second.find('.visitor').text()).toContain('got 3 correct');
  expect(second.find('.at').text()).toContain('1 minute');

  expect(third.find('.position').text()).toEqual('3');
  expect(third.find('.visitor').text()).toContain('got 2 correct');
});

it('renders a message when there are no games played', () => {
  const base = mockBase();
  const wrapper = mount(<LeaderBoard base={base} endpoint="all" />);

  wrapper.setState({ results: [] });

  expect(wrapper.text()).toContain('No players yet');
});
