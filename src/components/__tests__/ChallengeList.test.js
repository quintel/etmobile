/* global it expect jest */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import ChallengeList from '../ChallengeList';

const mockBase = () => ({
  fetch: () => Promise.resolve([]),
  bindToState: jest.fn(),
  removeBinding: jest.fn()
});

it('renders a loading message prior to fetching challenges', () => {
  const wrapper = shallow(<ChallengeList active base={mockBase()} />);
  expect(wrapper.text()).toContain('Loading challenges');
});

it('fetches active challenges from Firebase', () => {
  const base = mockBase();
  base.fetch = jest.fn().mockReturnValue(Promise.resolve([]));

  // MemoryRouter is required to provide <Link /> with router context.
  mount(<MemoryRouter><ChallengeList active base={base} /></MemoryRouter>);

  expect(base.fetch).toHaveBeenCalled();

  const query = base.fetch.mock.calls[0][1].queries;

  expect(query.hasOwnProperty('startAt')).toEqual(true);
  expect(query.hasOwnProperty('endAt')).toEqual(false);

  // be within 100ms of now
  expect(query.startAt / 10000).toBeCloseTo(new Date().getTime() / 10000, 1);
});

it('fetches inactive challenges from Firebase', () => {
  const base = mockBase();
  base.fetch = jest.fn().mockReturnValue(Promise.resolve([]));

  // MemoryRouter is required to provide <Link /> with router context.
  mount(<MemoryRouter><ChallengeList base={base} /></MemoryRouter>);

  expect(base.fetch).toHaveBeenCalled();

  const query = base.fetch.mock.calls[0][1].queries;

  expect(query.hasOwnProperty('endAt')).toEqual(true);
  expect(query.hasOwnProperty('startAt')).toEqual(false);

  // be within 100ms of now
  expect(query.endAt / 10000).toBeCloseTo(new Date().getTime() / 10000, 1);
});

it('renders challenges', () => {
  const expires = new Date(new Date().getTime() + 1000);

  const promise = Promise.resolve([
    { key: 'abc', name: 'My first challenge', expires },
    { key: 'def', name: 'another challenge', expires },
    { key: 'hij', name: 'Z Final challenge', expires }
  ]);

  const base = mockBase();
  base.fetch = jest.fn().mockReturnValue(promise);

  // MemoryRouter is required to provide <Link /> with router context.
  const wrapper = mount(
    <MemoryRouter><ChallengeList active base={base} /></MemoryRouter>
  );

  return promise.then(() => {
    const challenges = wrapper.find('.challenge');

    expect(challenges.at(0).text()).toContain('another challenge');
    expect(challenges.at(1).text()).toContain('My first challenge');
    expect(challenges.at(2).text()).toContain('Z Final challenge');
  });
});
