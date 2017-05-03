/* global it expect */

import React from 'react';
import { shallow } from 'enzyme';
import { FormattedNumber } from 'react-intl';

import PreviousSummary from '../PreviousSummary';
import QuestionSummary from '../QuestionSummary';

const stateWithSummaries = (firstDelta = -1.0, secondDelta = -0.1) => ({
  name: 'First choice or second choice?',
  choices: [{
    icon: 'wind',
    isCorrect: true,
    name: 'First choice',
    description: 'Desc of choice 1',
    delta: firstDelta
  }, {
    icon: 'wind',
    isCorrect: true,
    name: 'Second choice',
    description: 'Desc of choice 2',
    delta: secondDelta
  }]
});

it('renders a simple summary when closed', () => {
  const wrapper = shallow(
    <PreviousSummary question={stateWithSummaries()} />
  );

  expect(wrapper.find('.choice').length).toEqual(2);

  const numbers = wrapper.find(FormattedNumber);

  expect(numbers.at(0).props().value).toEqual(-1.0);
  expect(numbers.at(1).props().value).toEqual(-0.1);
});

it('renders no quesiton summary when closed', () => {
  const wrapper = shallow(
    <PreviousSummary question={stateWithSummaries()} />
  );

  expect(wrapper.find(QuestionSummary).length).toEqual(0);
});

it('renders a quesiton summary when opened', () => {
  const wrapper = shallow(
    <PreviousSummary question={stateWithSummaries()} />
  );

  wrapper.setState({ open: true });

  expect(wrapper.find(QuestionSummary).length).toEqual(1);
});
