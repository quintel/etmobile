import React, { PropTypes } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import classNames from 'classnames';

import Choice from './Choice';
import QuestionSummary from './QuestionSummary';

/**
 * Formats a choice delta.
 */
const choiceDelta = delta => (
  <span><FormattedNumber value={Math.round(delta * 100) / 100} />%</span>
);

/**
 * Builds the summary containing the CO2 emissions of the two choices.
 */
const buildSummary = (choices, onClick, selected) => {
  const classes = choices.map(choice => classNames({
    choice: true,
    selected: choice === selected,
    correct: choice.isCorrect,
    incorrect: !choice.isCorrect
  }));

  return (
    <button onClick={onClick} className="main-button">
      <div className={classes[0]}>{choiceDelta(choices[0].delta)}</div>
      <div className="divider">?</div>
      <div className={classes[1]}>{choiceDelta(choices[1].delta)}</div>
    </button>
  );
};

/**
 * A summary of the most recent question answered. Shown in the header to
 * provide the means for a visitor to recap the reasons for the previous answer
 * being correct or incorrect.
 */
class PreviousSummary extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
    window.scrollTo(0, 0);
  }

  render() {
    const classes = classNames({
      'animated': true,
      'previous-result': true,
      'open': this.state.open
    });

    const summary = buildSummary(
      this.props.question.choices, this.toggle, this.props.question.selected
    );

    return (
      <div className={classes}>
        {summary}
        {this.state.open ?
          <div>
            <div className="recap">
              <QuestionSummary question={this.props.question} />
              <button onClick={this.toggle} className="close">
                <FormattedMessage id="summary.hideExplanation" />
              </button>
            </div>
          </div> :
          null}
      </div>
    );
  }
}

PreviousSummary.propTypes = {
  question: PropTypes.shape({
    choices: PropTypes.arrayOf(Choice.propTypes.choice).isRequired,
    selected: Choice.propTypes.choice.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default PreviousSummary;
