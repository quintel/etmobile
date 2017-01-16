/* global it expect jest */

import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';

it('shows only one year when the app was developed this year', () => {
  const year = new Date().getFullYear();
  const wrapper = shallow(<Footer startYear={year} setLocale={() => {}} />);

  expect(wrapper.text()).toContain(`${year}`);
  expect(wrapper.text()).not.toContain(`${year}-`);
});

it('shows a year range when the app was developed a previous year', () => {
  const thisYear = new Date().getFullYear();
  const wrapper = shallow(<Footer startYear={2014} setLocale={() => {}} />);

  expect(wrapper.text()).toContain(`2014-${thisYear}`);
});

it('permits selecting Dutch as a locale', () => {
  const setLocale = jest.fn();
  const wrapper = shallow(<Footer setLocale={setLocale} />);
  wrapper.find('.language-selection button.nl').simulate('click');

  expect(setLocale).toHaveBeenCalledWith('nl');
});

it('permits selecting English as a locale', () => {
  const setLocale = jest.fn();
  const wrapper = shallow(<Footer setLocale={setLocale} />);
  wrapper.find('.language-selection button.en').simulate('click');

  expect(setLocale).toHaveBeenCalledWith('en');
});
