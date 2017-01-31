/* global it expect */

import React from 'react';
import { mountWithIntl } from '../../utils/intlEnzymeHelper';

import Header from '../Header';

it('renders the app name', () => {
  expect(mountWithIntl(<Header />).text().includes('ETMobile')).toEqual(true);
});

it('renders an optional message instead of the app name', () => {
  const wrapper = mountWithIntl(<Header>Hi there!</Header>);

  expect(wrapper.text().includes('Hi there!')).toEqual(true);
  expect(wrapper.text().includes('ETMobile')).toEqual(false);
});
