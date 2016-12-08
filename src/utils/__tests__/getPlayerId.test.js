/* global it expect beforeEach afterEach */

import getPlayerId, { clear } from '../getPlayerId';

beforeEach(clear);
afterEach(clear);

it('sets a player ID when none is present', () => {
  expect(getPlayerId().length).toEqual(16);
});

it('fetches a player ID when one is present', () => {
  const id = getPlayerId();
  expect(getPlayerId()).toEqual(id);
});
