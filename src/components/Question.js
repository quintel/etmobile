import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { FormattedMessage } from 'react-intl';

import Choice from './Choice';

import {
  shouldShowExplanation,
  setShowExplanations
} from '../utils/explanations';

const onChangeAutoDismiss = event => (
  setShowExplanations(!event.target.checked)
);

class Question extends React.Component {
  constructor() {
    super();

    this.state = {
      choice: null,
      didDismissExplanation: false,
      showExplanations: false
    };

    this.onChoiceSelected = this.onChoiceSelected.bind(this);
    this.onExplanationDismiss = this.onExplanationDismiss.bind(this);
  }

  onChoiceSelected(choiceIndex) {
    if (this.state.choice !== null) {
      return;
    }

    if (shouldShowExplanation()) {
      this.setState({ choice: choiceIndex, showExplanations: true });
    } else {
      this.setState(
        () => ({ choice: choiceIndex }),
        () => this.onExplanationDismiss(false)
      );
    }
  }

  onExplanationDismiss(immediate) {
    this.setState(
      () => ({ didDismissExplanation: true }),
      () => this.props.onChoiceMade(
        this.props.choices[this.state.choice],
        // will be false when manually triggered, true or an Event otherwise.
        !!immediate
      )
    );
  }

  render() {
    return (
      <div className="question">
        <h1>{this.props.name}</h1>

        <div className="choices-container">
          {this.props.choices.map((choice, index) => (
            <Choice
              key={index}
              choice={choice}
              index={index}
              onChoiceSelected={this.onChoiceSelected}
              selectedIndex={this.state.choice}
              showExplanations={this.state.showExplanations}
            />
          ))}
        </div>

        <ReactCSSTransitionGroup
          component="div"
          transitionName={{ enter: 'fadeIn', leave: 'fadeOut' }}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {this.state.showExplanations ?
            <div key="dismiss" className="dismiss-explanation animated">
              <button
                disabled={this.state.didDismissExplanation}
                onClick={this.onExplanationDismiss}
              >
                <FormattedMessage id="game.nextQuestion" /> &raquo;
              </button>

              <label htmlFor="auto-dismiss" className="auto-dismiss">
                <input
                  type="checkbox"
                  id="auto-dismiss"
                  onChange={onChangeAutoDismiss}
                />
                {' '}
                <FormattedMessage id="game.autoSkipExplanations" />
              </label>
            </div>
            : null
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Question.propTypes = {
  choices: PropTypes.arrayOf(Choice.propTypes.choice).isRequired,
  onChoiceMade: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Question;
