/* global it expect */

import translations from '../locales/translations';
import localeSettings from '../locales/settings';

it('loads English messages', () => {
  expect(translations('en')).toBeInstanceOf(Object);
});

it('loads Dutch messages', () => {
  expect(translations('nl')).toBeInstanceOf(Object);
});

it('retrieves settings for "en"', () => {
  expect(localeSettings('en')).toBeInstanceOf(Object);
});

it('retrieves settings for "nl"', () => {
  expect(localeSettings('en')).toBeInstanceOf(Object);
});

it('defaults to settings for "nl"', () => {
  expect(localeSettings('unknown')).toEqual(localeSettings('nl'));
});
