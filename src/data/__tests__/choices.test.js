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

data.forEach((choice) => {
  it('must have a key for each choice', () => {
    expect(choice.key).not.toBe(undefined);
  });

  it('must not have duplicate keys', () => {
    expect(data.filter(other => other.key === choice.key).length).toEqual(1);
  });
});
