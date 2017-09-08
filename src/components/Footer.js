import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import LanguageSelection from './LanguageSelection';
import ExplanationSelection from './ExplanationSelection';

import {
  setShowExplanations,
  shouldShowExplanation
} from '../utils/explanations';

const Footer = ({ setLocale, startYear }) => {
  const endYear = new Date().getFullYear();

  return (
    <footer>
      <LanguageSelection includePrompt setLocale={setLocale} />

      <ExplanationSelection
        selected={shouldShowExplanation()}
        onChange={setShowExplanations}
      />

      <p>
        <FormattedMessage
          id="footer.partOfTheETM"
          values={{
            etmLink: <a href="https://energytransitionmodel.com/">
              <FormattedMessage id="footer.etm" />
            </a>
          }}
        />
        <br />
        <FormattedMessage id="footer.developedBy" />
        &copy; {startYear}{endYear !== startYear ? `-${endYear}` : null}
      </p>
      <p>
        <a href="https://energytransitionmodel.com/privacy">
          <FormattedMessage id="footer.privacy" />
        </a>
        {' '}|{' '}
        <a href="https://energytransitionmodel.com/terms">
          <FormattedMessage id="footer.terms" />
        </a>
        <br />
        <FormattedMessage
          id="footer.iconsBy"
          values={{
            link: <a href="http://www.flaticon.com/">Flaticon</a>
          }}
        />
      </p>
    </footer>
  );
};

Footer.defaultProps = { startYear: 2016 };

Footer.propTypes = {
  setLocale: PropTypes.func.isRequired,
  startYear: PropTypes.number
};

export default Footer;
