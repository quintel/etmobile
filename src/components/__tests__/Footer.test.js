/* global it expect */

import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

it('shows only one year when the app was developed this year', () => {
  const year = new Date().getFullYear();
  const wrapper = shallow(<Footer startYear={year} />);

  expect(wrapper.text()).toContain(`${year}`);
  expect(wrapper.text()).not.toContain(`${year}-`);
});

it('shows a year range when the app was developed a previous year', () => {
  const thisYear = new Date().getFullYear();
  const wrapper = shallow(<Footer startYear={2014} />);

  expect(wrapper.text()).toContain(`2014-${thisYear}`);
});
