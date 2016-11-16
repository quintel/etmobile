/* global it expect describe beforeEach afterEach */

import mapAnswersToQuestions from '../mapAnswersToQuestions';

const questions = [
  { name: 'Q1', choices: [{}, {}] },
  { name: 'Q2', choices: [{}, {}] }
];

const answers = [[-1.0, 0.2], [-3.2, -3.3]];

it('maps answers to each choice', () => {
  const mapped = mapAnswersToQuestions(questions, answers);

  expect(mapped[0].choices[0].delta).toEqual(-1.0);
  expect(mapped[0].choices[1].delta).toEqual(0.2);

  expect(mapped[1].choices[0].delta).toEqual(-3.2);
  expect(mapped[1].choices[1].delta).toEqual(-3.3);
});

it('maps isCorrect values to each choice', () => {
  const mapped = mapAnswersToQuestions(questions, answers);

  expect(mapped[0].choices[0].isCorrect).toEqual(true);
  expect(mapped[0].choices[1].isCorrect).toEqual(false);

  expect(mapped[1].choices[0].isCorrect).toEqual(false);
  expect(mapped[1].choices[1].isCorrect).toEqual(true);
});

it('raises an error when a question answer is missing', () => {
  const missingQuestionAnswer = [[-1.0, 0.2]];

  expect(
    () => mapAnswersToQuestions(questions, missingQuestionAnswer)
  ).toThrowError('Answers length (1) and questions length (2) do not match');
});

it('raises an error when a choice answer is missing', () => {
  const missingChoiceAnswer = [[-1.0, 0.2], [-3]];

  expect(
    () => mapAnswersToQuestions(questions, missingChoiceAnswer)
  ).toThrowError(
    'Answers length for question \'Q2\' (1) and number of choices (2) do ' +
    'not match'
  );
});
