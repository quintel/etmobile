/* global it expect */

import React from 'react';
import { FormattedNumber } from 'react-intl';
import { shallowWithIntl } from '../../utils/intlEnzymeHelper';

import ChoiceSummary from '../ChoiceSummary';

const props = (isCorrect = true) => ({
  icon: 'wind',
  name: 'Second choice',
  description: 'Desc of choice 2',
  delta: -0.555555,
  isCorrect
});

it('renders a correct choice', () => {
  const wrapper = shallowWithIntl(<ChoiceSummary {...props()} />);

  expect(wrapper.find('.change.correct').length).toEqual(1);
  expect(wrapper.find('.change.incorrect').length).toEqual(0);
});

it('renders an incorrect choice', () => {
  const wrapper = shallowWithIntl(<ChoiceSummary {...props(false)} />);

  expect(wrapper.find('.change.correct').length).toEqual(0);
  expect(wrapper.find('.change.incorrect').length).toEqual(1);
});

it('rounds the delta to 2 decimal places', () => {
  const wrapper = shallowWithIntl(<ChoiceSummary {...props(false)} />);
  const change = wrapper.find('.change').find(FormattedNumber);

  expect(change.props().value).toEqual(-0.56);
});
