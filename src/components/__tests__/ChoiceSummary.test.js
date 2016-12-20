/* global it expect */

import React from 'react';
import { shallow } from 'enzyme';

import ChoiceSummary from '../ChoiceSummary';

const props = (isCorrect = true) => ({
  icon: 'wind',
  name: 'Second choice',
  description: 'Desc of choice 2',
  delta: -0.555555,
  isCorrect
});

it('renders a correct choice', () => {
  const wrapper = shallow(<ChoiceSummary {...props()} />);

  expect(wrapper.find('.change.correct').length).toEqual(1);
  expect(wrapper.find('.change.incorrect').length).toEqual(0);
});

it('renders an incorrect choice', () => {
  const wrapper = shallow(<ChoiceSummary {...props(false)} />);

  expect(wrapper.find('.change.correct').length).toEqual(0);
  expect(wrapper.find('.change.incorrect').length).toEqual(1);
});

it('rounds the delta to 2 decimal places', () => {
  const wrapper = shallow(<ChoiceSummary {...props(false)} />);

  expect(wrapper.find('.change').text()).toEqual('-0.56%');
});
