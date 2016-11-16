/**
 * Given a collection of answers, determines the index of the correct answer.
 * @param  {array} answers An array of answer values.
 * @return {number}         The index of the correct answer.
 */
const correctAnswerIndex = answers => (
  answers.indexOf(
    answers.reduce((memo, answer) => (
      (answer < memo) ? answer : memo
    ), answers[0])
  )
);

/**
 * Asserts the number of answer arrays matches the number of questions, and that
 * each array contains an answer for each choice.
 */
const assertValidAnswers = (answers, questions) => {
  if (questions.length !== answers.length) {
    throw new Error(
      `Answers length (${answers.length}) and questions length ` +
      `(${questions.length}) do not match`
    );
  }

  questions.forEach((question, index) => {
    if (question.choices.length !== answers[index].length) {
      throw new Error(
        `Answers length for question '${question.name}' ` +
        `(${answers[index].length}) and number of choices ` +
        `(${question.choices.length}) do not match`
      );
    }
  });

  return true;
};

/**
 * Given a collection of questions and a collection of answers, maps the answer
 * to each choice.

 * @param  {array} answers   An array of answers
 * @param  {array} questions An array of questions

 * @return {array} An array containing the questions, with answers mapped to
 *                 each choice.
 */
export default (answers, questions) => {
  assertValidAnswers(answers, questions);

  return questions.map((question, qIndex) => {
    const correctIndex = correctAnswerIndex(answers[qIndex]);

    const choices = question.choices.map((choice, cIndex) => (
      { ...choice,
        delta: answers[qIndex][cIndex],
        isCorrect: cIndex === correctIndex
      }
    ));

    return { ...question, choices };
  });
};
