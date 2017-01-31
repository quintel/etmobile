import React, { PropTypes } from 'react';
import { Redirect } from 'react-router';
import { FormattedMessage } from 'react-intl';
import injectIntl from '../utils/injectIntl';

import Header from './Header';

import randomId from '../utils/randomId';
import challengeExpiry from '../utils/challengeExpiry';

/**
 * Given the "expiry time" select box, determines the timestamp at which the
 * challenge will close.
 */
const expiryFromSelect = field => challengeExpiry[field.value]().getTime();

/**
 * Retrieves a formatted error message by ID.
 */

class NewChallenge extends React.Component {
  constructor() {
    super();

    this.state = { challengeId: null, name: null, errors: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const name = `${this.nameField.value}`.trim();

    if (name.length) {
      const challengeId = randomId();
      const expires = expiryFromSelect(this.expiresField);
      const mode = this.difficultyField.value;

      this.props.base.post(
        `challenges/${challengeId}`, { data: { name, expires, mode } }
      ).then(
        () => this.setState({ challengeId, name }),
        () => this.setState(this.errorFor('challenges.errors.starting'))
      );
    } else {
      this.setState(this.errorFor('challenges.errors.missingName'));
    }
  }

  errorFor(id) {
    return { errors: [this.context.intl.formatMessage({ id })] };
  }

  render() {
    if (this.state.challengeId) {
      // When the visitor has created and saved their challenge, redirect to
      // the play page.
      return <Redirect to={`/play/${this.state.challengeId}`} />;
    }

    let errors;

    if (this.state.errors.length) {
      errors = (
        <ul className="errors">
          {this.state.errors.map((msg, index) =>
            <li key={`error-${index}`}>{msg}</li>
          )}
        </ul>
      );
    }

    return (
      <div>
        <Header />

        <div className="new-challenge-wrapper">
          <h1><FormattedMessage id="challenges.form.title" /></h1>

          <form
            disabled={this.state.challengeId != null}
            onSubmit={this.onSubmit}
            id="new-challenge"
          >
            <div className="field-wrapper">
              <label htmlFor="new-challenge-name">
                <FormattedMessage id="challenges.form.name.title" />
                <span className="description">
                  <FormattedMessage id="challenges.form.name.description" />
                </span>
              </label>
              <div className="field">
                <input
                  ref={(input) => { this.nameField = input; }}
                  type="text"
                  placeholder={
                    `${this.context.intl.formatMessage({
                      id: 'challenges.form.name.placeholder'
                    })}…`
                  }
                  id="new-challenge-name"
                  name="name"
                  defaultValue={this.props.defaultName}
                />
              </div>
            </div>

            <div className="field-wrapper">
              <label htmlFor="new-challenge-expires">
                <FormattedMessage id="challenges.form.expires.title" />&hellip;
                <span className="description">
                  <FormattedMessage id="challenges.form.expires.description" />
                </span>
              </label>
              <div className="field">
                <select
                  ref={(select) => { this.expiresField = select; }}
                  id="new-challenge-expires"
                  name="expires"
                  defaultValue="1d"
                >
                  <option value="4h">
                    {this.context.intl.formatMessage({
                      id: 'challenges.form.expires.options.4h'
                    })}
                  </option>
                  <option value="8h">
                    {this.context.intl.formatMessage({
                      id: 'challenges.form.expires.options.8h'
                    })}
                  </option>
                  <option value="1d">
                    {this.context.intl.formatMessage({
                      id: 'challenges.form.expires.options.1d'
                    })}
                  </option>
                  <option value="3d">
                    {this.context.intl.formatMessage({
                      id: 'challenges.form.expires.options.3d'
                    })}
                  </option>
                  <option value="1w">
                    {this.context.intl.formatMessage({
                      id: 'challenges.form.expires.options.1w'
                    })}
                  </option>
                  <option value="2w">
                    {this.context.intl.formatMessage({
                      id: 'challenges.form.expires.options.2w'
                    })}
                  </option>
                  <option value="1m">
                    {this.context.intl.formatMessage({
                      id: 'challenges.form.expires.options.1m'
                    })}
                  </option>
                </select>
              </div>
            </div>

            <div className="field-wrapper">
              <label htmlFor="new-challenge-difficulty">
                <FormattedMessage id="challenges.form.difficulty.title" />
                <span className="description">
                  <FormattedMessage
                    id="challenges.form.difficulty.description"
                  />
                </span>
              </label>

              <div className="field">
                <select
                  ref={(select) => { this.difficultyField = select; }}
                  id="new-challenge-difficulty"
                  name="difficulty"
                  defaultValue="easy"
                >
                  <option value="easy">
                    {this.context.intl.formatMessage({
                      id: 'game.difficultyEasy'
                    })}
                  </option>
                  <option value="medium">
                    {this.context.intl.formatMessage({
                      id: 'game.difficultyMedium'
                    })}
                  </option>
                  <option value="hard">
                    {this.context.intl.formatMessage({
                      id: 'game.difficultyHard'
                    })}
                  </option>
                </select>
              </div>
            </div>

            {errors}

            <div className="field-wrapper buttons">
              <button>
                <FormattedMessage id="challenges.form.submit" />{' '}
                <span className="arrows">&raquo;</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

NewChallenge.propTypes = {
  base: PropTypes.shape({ post: PropTypes.func.isRequired }).isRequired,
  defaultName: PropTypes.string
};

export default injectIntl(NewChallenge);
