/* global it expect */

import randomId from '../randomId';

it('creates a 16 character string', () => {
  expect(typeof randomId()).toEqual('string');
  expect(randomId().length).toEqual(16);
});
