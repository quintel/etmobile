/* global it expect describe */

import mapAnswersToChoices from '../mapAnswersToChoices';

const choices = [
  { name: 'C1' }, { name: 'C2' }, { name: 'C3' }, { name: 'C4' }
];

const answers = [-1.0, 0.2, -3.2, -3.3];

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
