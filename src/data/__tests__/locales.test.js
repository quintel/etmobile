/* global it expect */

import translations from '../locales/translations';

it('loads English messages', () => {
  expect(translations('en')).toBeInstanceOf(Object);
});

it('loads Dutch messages', () => {
  expect(translations('nl')).toBeInstanceOf(Object);
});
