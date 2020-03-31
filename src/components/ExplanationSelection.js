import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import classNames from 'classnames';

import offSvg from '../images/explanations/off.svg';
import onSvg from '../images/explanations/on.svg';

import offSelectedSvg from '../images/explanations/off-selected.svg';
import onSelectedSvg from '../images/explanations/on-selected.svg';

class ExplanationSelection extends React.Component {
  constructor() {
    super();

    this.state = { selected: null };
    this.choose = this.choose.bind(this);
  }

  selectedValue() {
    if (this.state.selected !== null) {
      return this.state.selected;
    }

    return this.props.selected;
  }

  choose(event) {
    const showExplanations = event.target.value === 'yes';

    this.props.onChange(showExplanations);

    this.setState({ selected: showExplanations });
  }

  render() {
    const selected = this.selectedValue();
    const yesClasses = classNames({ selected: selected === true });
    const noClasses = classNames({ selected: selected !== true });

    let yesImg = onSvg;
    let noImg = offSelectedSvg;

    if (selected) {
      yesImg = onSelectedSvg;
      noImg = offSvg;
    }

    return (
      <div className="app-option explanation-selection">
        <span className="prompt">
          <FormattedMessage id="app.showExplanations" />
        </span>

        <ul>
          <li className={yesClasses}>
            <button
              onClick={this.choose}
              value="yes"
              className="yes"
              style={{ backgroundImage: `url(${yesImg})` }}
            >
              <FormattedMessage id="app.yes" />
            </button>
          </li>
          <li className={noClasses}>
            <button
              onClick={this.choose}
              value="no"
              className="no"
              style={{ backgroundImage: `url(${noImg})` }}
            >
              <FormattedMessage id="app.no" />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

ExplanationSelection.propTypes = {
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ExplanationSelection;
