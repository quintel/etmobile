import React, { PropTypes } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import homeSvg from '../images/home.svg';

// <a /> should be a <Link /> to avoid reloading the page, but avoids having to
// wrap many tests in a <MemoryRouter />
const Header = ({ children }) => (
  <header>
    <a href={process.env.PUBLIC_URL || '/'}>
      <img alt="Home" src={homeSvg} width="21" height="21" />
    </a>
    <div className="title">
      {children}
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node
};

Header.defaultProps = {
  children: (
    <span><FormattedMessage id="app.shortName" />
      {' '}&ndash;{' '}
      <FormattedHTMLMessage id="app.tagline" />
    </span>
  )
};

export default Header;
