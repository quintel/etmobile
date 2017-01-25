/* global it expect jest */

import React from 'react';
import { MemoryRouter } from 'react-router';
import { mountWithIntl } from '../../utils/intlEnzymeHelper';

import Root from '../Root';
import FrontPage from '../../components/FrontPage';
import GameChallenge from '../../components/GameChallenge';
import NewChallenge from '../../components/NewChallenge';
import Footer from '../../components/Footer';

import suitableLanguage from '../../utils/suitableLanguage';

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

  const wrapper = mountWithIntl(
    <MemoryRouter location="/">
      <Root base={base} choices={[]} />
    </MemoryRouter>,
  );

  return promise.then(() => {
    expect(wrapper.find(FrontPage).length).toEqual(1);
  });
});

it('changes the locale', () => {
  const wrapper = mountWithIntl(
    <MemoryRouter location="/">
      <Root base={stubBase()} choices={[]} />
    </MemoryRouter>,
  );

  wrapper.find(Footer).find('.language-selection button.nl').simulate('click');

  expect(suitableLanguage([])).toEqual('nl');
});

it('renders the game at /play', () => {
  const wrapper = mountWithIntl(
    <MemoryRouter location="/play">
      <Root base={stubBase()} choices={[]} />
    </MemoryRouter>,
  );

  expect(wrapper.find(GameChallenge).length).toEqual(1);
  expect(wrapper.find(GameChallenge).props().challengeId).toEqual(undefined);
});

it('renders a challenge game at /play/challengeId', () => {
  const wrapper = mountWithIntl(
    <MemoryRouter location="/play/abc">
      <Root base={stubBase()} choices={[]} />
    </MemoryRouter>,
  );

  expect(wrapper.find(GameChallenge).length).toEqual(1);
  expect(wrapper.find(GameChallenge).props().params.challengeId).toEqual('abc');
});

it('renders the new challenge page at /new-challenge', () => {
  const wrapper = mountWithIntl(
    <MemoryRouter location="/new-challenge">
      <Root base={stubBase()} choices={[]} />
    </MemoryRouter>,
  );

  expect(wrapper.find(NewChallenge).length).toEqual(1);
});
