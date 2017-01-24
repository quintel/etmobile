/* global describe it expect */

import answers from '../answers';
import choices from '../choices';

it('must have one answer for each choice', () => {
  expect(answers.length).toEqual(choices.length);
});

it('must be an array', () => {
  expect(answers).toBeInstanceOf(Array);
});

it('must have a number as each item', () => {
  answers.forEach(value => expect(typeof value).toEqual('number'));
});
