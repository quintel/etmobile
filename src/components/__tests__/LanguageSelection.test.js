/* global it expect jest */

import React from 'react';
import { shallow } from 'enzyme';

import LanguageSelection from '../LanguageSelection';

it('renders no prompt by default', () => {
  const wrapper = shallow(
    <LanguageSelection setLocale={() => {}} />
  );

  expect(wrapper.find('.prompt').length).toEqual(0);
});

it('renders a prompt when requested', () => {
  const wrapper = shallow(
    <LanguageSelection includePrompt setLocale={() => {}} />
  );

  expect(wrapper.find('.prompt').length).toEqual(1);
});


it('permits selecting Dutch as a locale', () => {
  const setLocale = jest.fn();
  const wrapper = shallow(<LanguageSelection setLocale={setLocale} />);
  wrapper.find('.language-selection button.nl').simulate('click');

  expect(setLocale).toHaveBeenCalledWith('nl');
});

it('permits selecting English as a locale', () => {
  const setLocale = jest.fn();
  const wrapper = shallow(<LanguageSelection setLocale={setLocale} />);
  wrapper.find('.language-selection button.en').simulate('click');

  expect(setLocale).toHaveBeenCalledWith('en');
});
