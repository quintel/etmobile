/* global it expect afterEach */

import { getPlayerName, setPlayerName, clearPlayerName } from '../playerName';

afterEach(clearPlayerName);

it('defaults to null', () => {
  expect(getPlayerName()).toEqual(null);
});

it('sets a name', () => {
  setPlayerName('Holt');
  expect(getPlayerName()).toEqual('Holt');
});

it('removes a name', () => {
  setPlayerName('Holt');
  clearPlayerName();
  expect(getPlayerName()).toEqual(null);
});
