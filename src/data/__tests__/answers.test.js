/* global describe it expect */

import data from '../answers';

it('must be an array', () => {
  expect(data).toBeInstanceOf(Array);
});

it('must have a number as each item', () => {
  data.forEach(value => expect(typeof value).toEqual('number'));
});
