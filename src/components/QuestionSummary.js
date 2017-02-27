import React, { PropTypes } from 'react';

import Choice from './Choice';
import ChoiceSummary from './ChoiceSummary';

/**
 * Sorts the two choices in the most recent question so that the correct answer
 * always appears first.
 */
const sortChoicesByCO2 = (a, b) => (a.delta < b.delta ? -1 : 1);

const QuestionSummary = ({ question: { choices, name } }) => (
  <div className="question-summary">
    <h3>{name}</h3>

    {choices.sort(sortChoicesByCO2).map((choice, index) => (
      <ChoiceSummary key={index} {...choice} />
    ))}
  </div>
);

QuestionSummary.propTypes = {
  question: PropTypes.shape({
    choices: PropTypes.arrayOf(Choice.propTypes.choice).isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default QuestionSummary;
