/* global it expect jest */

import questionFromChoices from '../questionFromChoices';

const intlMock = {
  formatMessage: ({ id }, values) => {
    if (values) {
      // Node v6 does not have Object.values yet.
      const vals = Object.keys(values).map(key => values[key]);
      return vals.join(' or ');
    }

    return id;
  }
};

it('creates a question from two choices', () => {
  const choices = [
    { key: 'a', icon: 'coal', delta: 0 },
    { key: 'b', icon: 'wind', delta: 0 }
  ];

  const question = questionFromChoices(choices, intlMock);

  expect(question.name).toEqual('Choices.a.header or choices.b.header?');
});

it('correctly capitalizes acronyms', () => {
  const choices = [
    { key: 'a', header: 'Wind', icon: 'wind', delta: 0 },
    { key: 'b', header: 'LNG', icon: 'lng', delta: 0 }
  ];

  const question = questionFromChoices(choices, intlMock);

  expect(question.name).toEqual('Wind or LNG?');
});

it('does not downcase a single capital letter', () => {
  const choices = [
    { key: 'a', icon: 'wind', header: 'Wind', delta: 0 },
    { key: 'b', icon: 'lng', header: 'A coal power plant', delta: 0 }
  ];

  const question = questionFromChoices(choices, intlMock);

  expect(question.name).toEqual('Wind or a coal power plant?');
});

it('assigns isCorrect to the choice with the lowest delta', () => {
  const choices = [
    { key: 'a', icon: 'coal', delta: 2 },
    { key: 'b', icon: 'wind', delta: -2 }
  ];

  const question = questionFromChoices(choices, intlMock);

  expect(question.choices[0].isCorrect).toEqual(false);
  expect(question.choices[1].isCorrect).toEqual(true);
});

it('assigns isCorrect to both choices when there is a tie', () => {
  const choices = [
    { key: 'a', icon: 'coal', delta: -2 },
    { key: 'b', icon: 'wind', delta: -2 }
  ];

  const question = questionFromChoices(choices, intlMock);

  expect(question.choices[0].isCorrect).toEqual(true);
  expect(question.choices[1].isCorrect).toEqual(true);
});

it('raises an error if only one choice is given', () => {
  const choices = [{ icon: 'wind', name: 'Wind' }];
  expect(questionFromChoices(choices, intlMock)).toEqual(null);
});

it('raises an error if only no choices are given', () => {
  expect(questionFromChoices([], intlMock)).toEqual(null);
});
