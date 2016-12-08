import React, { PropTypes } from 'react';
import { Redirect } from 'react-router';

import randomId from '../utils/randomId';
import challengeExpiry from '../utils/challengeExpiry';

/**
 * Given the "expiry time" select box, determines the timestamp at which the
 * challenge will close.
 */
const expiryFromSelect = field => challengeExpiry[field.value]().getTime();

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

      this.props.base.post(
        `challenges/${challengeId}`, { data: { name, expires } }
      ).then(
        () => this.setState({ challengeId, name }),
        () => {
          this.setState({
            errors: ['Sorry, there was an error starting your challenge.']
          });
        }
      );
    } else {
      this.setState({ errors: ['You must enter a name for your challenge!'] });
    }
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
        <header>ETMobile - Reduce your CO2 emissions</header>

        <div className="new-challenge-wrapper">
          <h1>Create a new challenge</h1>

          <form
            disabled={this.state.challengeId != null}
            onSubmit={this.onSubmit}
            id="new-challenge"
          >
            <div className="field-wrapper">
              <label htmlFor="new-challenge-name">
                Challenge name
                <span className="description">
                  Choose a name for your challenge. For example, the name of
                  your classroom, conference, or group.
                </span>
              </label>
              <div className="field">
                <input
                  ref={(input) => { this.nameField = input; }}
                  type="text"
                  placeholder="Choose a name&hellip;"
                  id="new-challenge-name"
                  name="name"
                  defaultValue={this.props.defaultName}
                />
              </div>
            </div>

            <div className="field-wrapper">
              <label htmlFor="new-challenge-expires">
                Challenge lasts for&hellip;
                <span className="description">
                  Once your challenge has finished, no new entries will be shown
                  on the leaderboard.
                </span>
              </label>
              <div className="field">
                <select
                  ref={(select) => { this.expiresField = select; }}
                  id="new-challenge-expires"
                  name="expires"
                  defaultValue="1d"
                >
                  <option value="4h">4 hours</option>
                  <option value="8h">8 hours</option>
                  <option value="1d">1 day</option>
                  <option value="3d">3 days</option>
                  <option value="1w">1 week</option>
                  <option value="2w">2 weeks</option>
                  <option value="1m">1 month</option>
                </select>
              </div>
            </div>

            {errors}

            <div className="field-wrapper buttons">
              <button>
                Create challenge{' '}
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

export default NewChallenge;
