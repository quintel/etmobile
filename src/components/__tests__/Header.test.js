/* global it expect */

import React from 'react';
import { mountWithIntl } from '../../utils/intlEnzymeHelper';

import Header from '../Header';

it('renders the app name', () => {
  expect(mountWithIntl(<Header />).text().includes('ETMobile')).toEqual(true);
});
