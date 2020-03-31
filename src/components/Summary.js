import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import injectIntl from '../utils/injectIntl';

import Choice from './Choice';
import QuestionSummary from './QuestionSummary';

import { balloon } from '../images/choices';

import {
  clearPlayerName,
  getPlayerName,
  setPlayerName
} from '../utils/playerName';

/**
 * Returns the path to the Firebase endpoint for a leaderboard.
 *
 * @param  {string} leaderboard The leaderboard name; "all" or the challenge ID.
 * @param  {string} uid         The unique ID of the current user.
 * @return {string}             The full leaderboard endpoint path.
 */
const lbEndpoint = (leaderboard, uid) => (
  `/leaderboards/${leaderboard}/${uid}`
);

class Summary extends React.Component {
  constructor() {
    super();
    this.onChangePlayerName = this.onChangePlayerName.bind(this);
  }

  /**
   * Triggered when the visitor changes their name. Updates local stored version
   * and the current and "all" leaderboards.
   */
  onChangePlayerName(event) {
    const { base, challengeId, uid } = this.props;
    const data = { who: event.target.value.trim() };

    if (!data.who.length) {
      clearPlayerName();
      data.who = null;
    } else {
      setPlayerName(data.who);
    }

    base.update(lbEndpoint('all', uid), { data });

    if (challengeId) {
      base.update(lbEndpoint(challengeId, uid), { data });
    }
  }

  render() {
    const {
      gameState: { answeredQuestions, correctChoices },
      onRestartGame
    } = this.props;

    return (
      <main className="results animated" key="results">
        <h1>
          <FormattedMessage id="summary.header" />
        </h1>
        <h2 className="result">
          { answeredQuestions[0].selected.isCorrect ?
            <FormattedMessage id="summary.allCorrect" /> :
            <FormattedMessage
              id="summary.numberCorrect" values={{ correct: correctChoices }}
            /> }
        </h2>

        <div className="result-item leaderboard">
          <div className="status">
            <img
              src={balloon}
              width="75"
              height="75"
              alt="presentation"
            />
          </div>
          <div className="info">
            <div className="field-wrapper player-name">
              <label htmlFor="player-name">
                <FormattedMessage id="leaderboard.yourName" />
                <span className="description">
                  <FormattedMessage id="leaderboard.playerNameDescription" />
                </span>
              </label>
              <div className="field">
                <input
                  id="player-name"
                  placeholder={
                    this.context.intl.formatMessage({ id: 'leaderboard.anon' })
                  }
                  defaultValue={getPlayerName()}
                  onChange={this.onChangePlayerName}
                />
              </div>
            </div>
          </div>
        </div>

        <button onClick={onRestartGame}>
          <FormattedMessage id="summary.tryAgain" />
        </button>

        <div className="recap">
          <h2><FormattedMessage id="summary.correctWas" />&hellip;</h2>

          {answeredQuestions.map((question, index) => (
            <QuestionSummary key={index} question={question} />
          ))}
        </div>

        <button onClick={onRestartGame}>
          <FormattedMessage id="summary.tryAgain" />
        </button>
      </main>
    );
  }
}

Summary.propTypes = {
  base: PropTypes.shape({ update: PropTypes.func.isRequired }).isRequired,
  challengeId: PropTypes.string,
  gameState: PropTypes.shape({
    correctChoices: PropTypes.number.isRequired,
    answeredQuestions: PropTypes.arrayOf(PropTypes.shape({
      choices: PropTypes.arrayOf(Choice.propTypes.choice)
    })).isRequired
  }).isRequired,
  onRestartGame: PropTypes.func.isRequired,
  uid: PropTypes.string
};

export default injectIntl(Summary);
