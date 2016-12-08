/* global it expect */

import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

it('renders the app name', () => {
  expect(shallow(<Header />).text().includes('ETMobile')).toEqual(true);
});
