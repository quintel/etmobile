const choiceTitle = (choice, upcase) => {
  const func = String.prototype[upcase ? 'toUpperCase' : 'toLowerCase'];
  const header = choice.header || choice.name;

  if (!header) {
    throw new Error('No "header" or "name" defined for', choice);
  }

  return `${func.apply(header.charAt(0))}${header.substr(1)}`;
};

/**
 * Takes an array of choices and creates an array of questions which may be
 * presented to the visitor.
 *
 * @param  {array} choices An array of choices.
 * @return {array}         An array of questions.
 */
export default (choices) => {
  if (choices.length < 2) {
    throw new Error('choicesToQuestions requires at least two choices');
  }

  const questions = [];

  for (let i = 0; i < choices.length - 1; i += 2) {
    const first = choices[i];
    const second = choices[i + 1];

    const desc = `${first.description || ''} ${second.description || ''}`;

    questions.push({
      name: `${choiceTitle(first, true)} or ${choiceTitle(second, false)}?`,
      choices: [
        { ...first, isCorrect: first.delta <= second.delta },
        { ...second, isCorrect: first.delta > second.delta }
      ],
      description: {
        __html: `<p>${desc.trim()}</p>`
      }
    });
  }

  return questions;
};