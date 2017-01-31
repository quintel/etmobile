/* global it expect describe */

import mapAnswersToChoices from '../mapAnswersToChoices';

const choices = [
  { key: 'a', name: 'C1' },
  { key: 'b', name: 'C2' },
  { key: 'c', name: 'C3' },
  { key: 'd', name: 'C4' }
];

const answers = { a: -1.0, b: 0.2, c: -3.2, d: -3.3 };

it('maps answers to each choice', () => {
  const mapped = mapAnswersToChoices(answers, choices);

  expect(mapped[0].delta).toEqual(-1.0);
  expect(mapped[1].delta).toEqual(0.2);

  expect(mapped[2].delta).toEqual(-3.2);
  expect(mapped[3].delta).toEqual(-3.3);
});

it('raises an error when a question answer is missing', () => {
  const missingAnswer = [-1.0, 0.2, 3.0];

  expect(
    () => mapAnswersToChoices(missingAnswer, choices)
  ).toThrowError('Answers length (3) and choices length (4) do not match');
});
