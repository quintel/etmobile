/**
 * Asserts the number of answer arrays matches the number of choices.
 */
const assertValidAnswers = (answers, choices) => {
  const answersLength = Object.keys(answers).length;

  if (choices.length !== answersLength) {
    throw new Error(
      `Answers length (${answersLength}) and choices length ` +
      `(${choices.length}) do not match`
    );
  }

  return true;
};

/**
 * Given a collection of choices and a collection of answers, maps the answer
 * to each choice.

 * @param  {object} answers An map of choice keys to query values.
 * @param  {array}  choices An array of choices

 * @return {array} An array containing the choices, with answers mapped to
 *                 each choice.
 */
export default (answers, choices) => {
  assertValidAnswers(answers, choices);

  return choices.map(choice => (
    { ...choice, delta: answers[choice.key] }
  ));
};
