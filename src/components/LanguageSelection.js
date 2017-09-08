import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import langEnSvg from '../images/lang/en.svg';
import langNlSvg from '../images/lang/nl.svg';

const LanguageSelection = ({ includePrompt, setLocale }) => (
  <div className="app-option language-selection">
    {includePrompt ?
      <span className="prompt"><FormattedMessage id="app.language" /></span> :
      null}
    <ul>
      <li>
        <button
          className="en"
          onClick={() => setLocale('en')}
          style={{ backgroundImage: `url(${langEnSvg})` }}
        >
          English
        </button>
      </li>
      <li>
        <button
          className="nl"
          onClick={() => setLocale('nl')}
          style={{ backgroundImage: `url(${langNlSvg})` }}
        >
          Nederlands
        </button>
      </li>
    </ul>
  </div>
);

LanguageSelection.propTypes = {
  setLocale: PropTypes.func.isRequired,
  includePrompt: PropTypes.bool
};

export default LanguageSelection;
