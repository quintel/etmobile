/* global it expect */

import questionFromChoices from '../questionFromChoices';

it('creates a question from two choices', () => {
  const choices = [
    { icon: 'coal', name: 'Coal', description: 'ABC.', delta: 0 },
    { icon: 'wind', name: 'Wind', description: 'DEF.', delta: 0 }
  ];

  const question = questionFromChoices(choices);

  expect(question.name).toEqual('Coal or wind?');
});

it('correctly capitalizes acronyms', () => {
  const choices = [
    { icon: 'wind', name: 'Wind', description: 'ABC.', delta: 0 },
    { icon: 'lng', name: 'LNG', description: 'DEF.', delta: 0 }
  ];

  const question = questionFromChoices(choices);

  expect(question.name).toEqual('Wind or LNG?');
});

it('does not downcase a single capital letter', () => {
  const choices = [
    { icon: 'wind', name: 'Wind', description: 'ABC.', delta: 0 },
    { icon: 'lng', name: 'A coal power plant', description: 'DEF.', delta: 0 }
  ];

  const question = questionFromChoices(choices);

  expect(question.name).toEqual('Wind or a coal power plant?');
});

it('assigns isCorrect to the choice with the lowest delta', () => {
  const choices = [
    { icon: 'coal', name: 'Coal', delta: 2 },
    { icon: 'wind', name: 'Wind', delta: -2 }
  ];

  const question = questionFromChoices(choices);

  expect(question.choices[0].isCorrect).toEqual(false);
  expect(question.choices[1].isCorrect).toEqual(true);
});

it('assigns isCorrect to both choices when there is a tie', () => {
  const choices = [
    { icon: 'coal', name: 'Coal', delta: -2 },
    { icon: 'wind', name: 'Wind', delta: -2 }
  ];

  const question = questionFromChoices(choices);

  expect(question.choices[0].isCorrect).toEqual(true);
  expect(question.choices[1].isCorrect).toEqual(true);
});

it('raises an error if a choice has no name or title', () => {
  const choices = [{ icon: 'coal' }, { icon: 'wind', name: 'Wind' }];
  expect(() => questionFromChoices(choices)).toThrowError();
});

it('raises an error if only one choice is given', () => {
  const choices = [{ icon: 'wind', name: 'Wind' }];
  expect(questionFromChoices(choices)).toEqual(null);
});

it('raises an error if only no choices are given', () => {
  expect(questionFromChoices([])).toEqual(null);
});
