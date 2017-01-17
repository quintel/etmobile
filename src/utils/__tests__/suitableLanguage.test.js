/* global it expect afterEach */

import suitableLanguage, {
  storeLocale, clearLocale
} from '../suitableLanguage';

afterEach(clearLocale);

it('returns en when en is prefered', () => {
  expect(suitableLanguage(['en', 'en'])).toEqual('en');
});

it('returns en when en-GB is prefered', () => {
  expect(suitableLanguage(['en-GB', 'en'])).toEqual('en');
});

it('returns nl when nl is prefered', () => {
  expect(suitableLanguage(['nl', 'en'])).toEqual('nl');
});

it('returns en when no suitable language is prefered', () => {
  expect(suitableLanguage(['de', 'ab'])).toEqual('en');
});

it('returns the stored locale when present', () => {
  storeLocale('nl');
  expect(suitableLanguage(['en'])).toEqual('nl');
});

it('ignores the stored locale when invalid', () => {
  storeLocale('de');
  expect(suitableLanguage(['nl', 'en'])).toEqual('nl');
});
