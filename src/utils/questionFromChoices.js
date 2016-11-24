const choiceTitle = (choice, upcase) => {
  const func = String.prototype[upcase ? 'toUpperCase' : 'toLowerCase'];
  const header = choice.header || choice.name;

  if (!header) {
    throw new Error('No "header" or "name" defined for', choice);
  }

  if (!upcase && header.match(/^[A-Z]+\b/)) {
    return header;
  }

  return `${func.apply(header.charAt(0))}${header.substr(1)}`;
};

/**
 * Takes an array of choices and creates a single question which may be
 * presented to the visitor. Returns null if there are insufficient choices to
 * create a new question.
 *
 * @param  {array} choices An array of choices.
 * @return {object}        A question.
 */
export default (choices) => {
  if (choices.length < 2) {
    return null;
  }

  const first = choices[0];
  const second = choices[1];

  return {
    name: `${choiceTitle(first, true)} or ${choiceTitle(second, false)}?`,
    choices: [
      { ...first, isCorrect: first.delta <= second.delta },
      { ...second, isCorrect: first.delta > second.delta }
    ]
  };
};
