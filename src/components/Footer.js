import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import langEnSvg from '../images/lang/en.svg';
import langNlSvg from '../images/lang/nl.svg';

const Footer = ({ setLocale, startYear }) => {
  const endYear = new Date().getFullYear();

  return (
    <footer>
      <div className="language-selection">
        <FormattedMessage id="app.language" />:
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
