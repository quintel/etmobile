/* global it expect afterEach */

import store from '../store';
import { getScore, setScore } from '../highScore';

afterEach(store.clear);

it('returns 0 when no score is set', () => {
  expect(getScore()).toEqual(0);
  expect(getScore('all')).toEqual(0);
  expect(getScore('xyz')).toEqual(0);
});

it('returns the set score when "all" is set', () => {
  setScore('all', 10);

  expect(getScore()).toEqual(10);
  expect(getScore('all')).toEqual(10);
  expect(getScore('xyz')).toEqual(0);
});

it('does not overwrite higher scores', () => {
  setScore('all', 10);
  expect(setScore('all', 5)).toEqual(false);

  expect(getScore()).toEqual(10);
  expect(getScore('all')).toEqual(10);
  expect(getScore('xyz')).toEqual(0);
});

it('overwrites lower scores', () => {
  setScore('all', 5);
  expect(setScore('all', 7)).toEqual(true);

  expect(getScore()).toEqual(7);
  expect(getScore('all')).toEqual(7);
  expect(getScore('xyz')).toEqual(0);
});
