import React from 'react';

// <a /> should be a <Link /> to avoid reloading the page, but avoids having to
// wrap many tests in a <MemoryRouter />
const Header = () => (
  <header>
    <a href={process.env.PUBLIC_URL || '/'}>
      ETMobile - Reduce your CO2 emissions
    </a>
  </header>
);

export default Header;
