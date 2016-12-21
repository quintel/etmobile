/* global it expect */

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Root from '../Root';
import FrontPage from '../../components/FrontPage';
import Game from '../../components/Game';
import NewChallenge from '../../components/NewChallenge';

const stubBase = () => ({
  auth: () => {},
  bindToState: () => {},
  fetch: () => Promise.resolve([]),
  onAuth: () => {},
  post: () => {},
  removeBinding: () => {},
  update: () => {}
});

it('renders the front page at /', () => {
  const base = stubBase();
  const promise = Promise.resolve([]);

  base.fetch = () => promise;

  const wrapper = mount(
    <MemoryRouter location="/">
      <Root base={base} choices={[]} />
    </MemoryRouter>,
  );

  return promise.then(() => {
    expect(wrapper.find(FrontPage).length).toEqual(1);
  });
});

it('renders the game at /play', () => {
  const wrapper = mount(
    <MemoryRouter location="/play">
      <Root base={stubBase()} choices={[]} />
    </MemoryRouter>,
  );

  expect(wrapper.find(Game).length).toEqual(1);
  expect(wrapper.find(Game).props().params.challengeId).toEqual(undefined);
});

it('renders a challenge game at /play/challengeId', () => {
  const wrapper = mount(
    <MemoryRouter location="/play/abc">
      <Root base={stubBase()} choices={[]} />
    </MemoryRouter>,
  );

  expect(wrapper.find(Game).length).toEqual(1);
  expect(wrapper.find(Game).props().params.challengeId).toEqual('abc');
});

it('renders the new challenge page at /new-challenge', () => {
  const wrapper = mount(
    <MemoryRouter location="/new-challenge">
      <Root base={stubBase()} choices={[]} />
    </MemoryRouter>,
  );

  expect(wrapper.find(NewChallenge).length).toEqual(1);
});
