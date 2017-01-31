import React, { PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';
import injectIntl from '../utils/injectIntl';

import Choice from './Choice';
import ChoiceSummary from './ChoiceSummary';

import { balloon } from '../images/choices';

import {
  clearPlayerName,
  getPlayerName,
  setPlayerName
} from '../utils/playerName';

/**
 * Sorts the two choices in the most recent question so that the correct answer
 * always appears first.
 */
const sortChoicesByCO2 = (a, b) => (a.delta < b.delta ? -1 : 1);

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
      gameState: { lastChoice, lastQuestion, correctChoices },
      onRestartGame
    } = this.props;

    return (
      <main className="results animated" key="results">
        <h1>
          <FormattedMessage id="summary.header" />
        </h1>
        <h2 className="result">
          { lastChoice.isCorrect ?
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

        <div className="choice-summary">
          <h2><FormattedMessage id="summary.correctWas" />&hellip;</h2>

          {lastQuestion.choices.sort(sortChoicesByCO2).map((choice, index) => (
            <ChoiceSummary key={index} {...choice} />
          ))}
        </div>
      </main>
    );
  }
}

Summary.propTypes = {
  base: PropTypes.shape({ update: PropTypes.func.isRequired }).isRequired,
  challengeId: PropTypes.string,
  gameState: PropTypes.shape({
    correctChoices: PropTypes.number.isRequired,
    lastChoice: PropTypes.shape({ isCorrect: PropTypes.boolean }).isRequired,
    lastQuestion: PropTypes.shape({
      choices: PropTypes.arrayOf(Choice.propTypes.choice)
    })
  }).isRequired,
  onRestartGame: PropTypes.func.isRequired,
  uid: PropTypes.string
};

export default injectIntl(Summary);
