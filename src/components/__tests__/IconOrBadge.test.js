/* global it expect jest */

import React from 'react';
import { shallowWithIntl, mountWithIntl } from '../../utils/intlEnzymeHelper';

import IconOrBadge from '../IconOrBadge';

it('renders an icon when no choice has been made', () => {
  const wrapper = shallowWithIntl(
    <IconOrBadge
      choice={{ delta: 1.0, icon: 'wind', isCorrect: true }}
      index={0}
      onChoiceSelected={() => {}}
    />
  );

  expect(wrapper.find('img').length).toEqual(1);
});

it('renders a result badge when a choice has been made', () => {
  const wrapper = mountWithIntl(
    <IconOrBadge
      choice={{ delta: 1.0, icon: 'wind', isCorrect: true }}
      index={0}
      onChoiceSelected={() => {}}
      selectedIndex={0}
    />
  );

  expect(wrapper.find('img').length).toEqual(0);
  expect(wrapper.text()).toEqual('1%');
});
