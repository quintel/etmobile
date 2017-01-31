/* global describe it expect */

import answers from '../answers';
import choices from '../choices';

it('must have answers for each choice', () => {
  const choiceKeys = choices.map(({ key }) => key);
  const answerKeys = Object.keys(answers);

  const undef = choiceKeys.filter(key => answerKeys.indexOf(key) === -1);

  expect(undef).toEqual([]);
});

it('must not have answers for non-existent choices', () => {
  const choiceKeys = choices.map(({ key }) => key);
  const answerKeys = Object.keys(answers);

  const undef = answerKeys.filter(key => choiceKeys.indexOf(key) === -1);

  expect(undef).toEqual([]);
});

it('must be an object', () => {
  expect(answers).toBeInstanceOf(Object);
});

it('must have a number as each item', () => {
  Object.keys(answers).forEach(
    key => expect(typeof answers[key]
  ).toEqual('number'));
});
