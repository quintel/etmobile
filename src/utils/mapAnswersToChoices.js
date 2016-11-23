/**
 * Asserts the number of answer arrays matches the number of choices.
 */
const assertValidAnswers = (answers, choices) => {
  if (choices.length !== answers.length) {
    throw new Error(
      `Answers length (${answers.length}) and choices length ` +
      `(${choices.length}) do not match`
    );
  }

  return true;
};

/**
 * Given a collection of choices and a collection of answers, maps the answer
 * to each choice.

 * @param  {array} answers An array of answers
 * @param  {array} choices An array of choices

 * @return {array} An array containing the choices, with answers mapped to
 *                 each choice.
 */
export default (answers, choices) => {
  assertValidAnswers(answers, choices);

  return choices.map((choice, index) => (
    { ...choice, delta: answers[index] }
  ));
};
