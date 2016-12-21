/* global describe it expect */

import data from '../choices';

it('must be an array', () => {
  expect(data).toBeInstanceOf(Array);
});

it('must have inputs on each item', () => {
  data.forEach((value) => {
    expect(typeof value.inputs).toEqual('object');
    expect(value.inputs).not.toEqual({});
  });
});
