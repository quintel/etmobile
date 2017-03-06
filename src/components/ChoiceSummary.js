import React, { PropTypes } from 'react';
import { FormattedNumber } from 'react-intl';

import Choice from './Choice';
import * as choiceImages from '../images/choices';

/**
 * Renders information about a single choice, indicating whether it was the
 * correct answer and the CO2 emission delta.
 */
const ChoiceSummary = props => (
  <div className="result-item">
    <div className="status">
      <img
        src={choiceImages[props.icon]}
        className="icon"
        width="75"
        height="75"
        alt="presentation"
      />
      <span className={`change ${props.isCorrect ? 'correct' : 'incorrect'}`}>
        <FormattedNumber value={Math.round(props.delta * 100) / 100} />%
      </span>
    </div>
    <div className="info">
      <h4>{props.name}</h4>
      <p
        className="why"
        dangerouslySetInnerHTML={{ __html: props.why || props.description }}
      />
    </div>
  </div>
);

ChoiceSummary.propTypes = {
  why: PropTypes.string,
  ...Choice.propTypes.choice
};

export default ChoiceSummary;
