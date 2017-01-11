import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

// <a /> should be a <Link /> to avoid reloading the page, but avoids having to
// wrap many tests in a <MemoryRouter />
const Header = () => (
  <header>
    <a href={process.env.PUBLIC_URL || '/'}>
      <FormattedMessage id="app.shortName" />
      {' '}&ndash;{' '}
      <FormattedHTMLMessage id="app.tagline" />
    </a>
  </header>
);

export default Header;
