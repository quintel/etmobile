import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import LanguageSelection from './LanguageSelection';

const Footer = ({ setLocale, startYear }) => {
  const endYear = new Date().getFullYear();

  return (
    <footer>
      <LanguageSelection includePrompt setLocale={setLocale} />
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
