/* global it expect */

import choicesToQuestions from '../choicesToQuestions';

it('creates a question from two choices', () => {
  const choices = [
    { icon: 'coal', name: 'Coal', description: 'ABC.', delta: 0 },
    { icon: 'wind', name: 'Wind', description: 'DEF.', delta: 0 }
  ];

  const questions = choicesToQuestions(choices);
  const question = questions[0];

  expect(questions.length).toEqual(1);

  expect(question.name).toEqual('Coal or wind?');
  expect(question.choices).toContainEqual({ ...choices[0], isCorrect: true });
  expect(question.choices).toContainEqual({ ...choices[1], isCorrect: false });
});

it('assigns isCorrect to the choice with the lowest delta', () => {
  const choices = [
    { icon: 'coal', name: 'Coal', delta: 2 },
    { icon: 'wind', name: 'Wind', delta: -2 }
  ];

  const questions = choicesToQuestions(choices);

  expect(questions[0].choices[0].isCorrect).toEqual(false);
  expect(questions[0].choices[1].isCorrect).toEqual(true);
});

it('assigns isCorrect to the first choice when there is a tie', () => {
  const choices = [
    { icon: 'coal', name: 'Coal', delta: -2 },
    { icon: 'wind', name: 'Wind', delta: -2 }
  ];

  const questions = choicesToQuestions(choices);

  expect(questions[0].choices[0].isCorrect).toEqual(true);
  expect(questions[0].choices[1].isCorrect).toEqual(false);
});

it('raises an error if a choice has no name or title', () => {
  const choices = [{ icon: 'coal' }, { icon: 'wind', name: 'Wind' }];
  expect(() => choicesToQuestions(choices)).toThrowError();
});

it('raises an error if only one choice is given', () => {
  const choices = [{ icon: 'wind', name: 'Wind' }];
  expect(() => choicesToQuestions(choices)).toThrowError();
});

it('raises an error if only no choices are given', () => {
  expect(() => choicesToQuestions([])).toThrowError();
});
