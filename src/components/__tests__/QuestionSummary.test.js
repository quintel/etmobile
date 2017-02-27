/* global it expect */

import React from 'react';
import { shallow } from 'enzyme';

import QuestionSummary from '../QuestionSummary';
import ChoiceSummary from '../ChoiceSummary';

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

it('renders a list of the question choices', () => {
  const wrapper = shallow(
    <QuestionSummary question={stateWithSummaries()} />
  );

  const summaries = wrapper.find(ChoiceSummary);

  expect(summaries.length).toEqual(2);
  expect(summaries.at(0).props().name).toEqual('First choice');
  expect(summaries.at(1).props().name).toEqual('Second choice');
});

it('sorts choices with the correct answer first', () => {
  const wrapper = shallow(
    <QuestionSummary question={stateWithSummaries(1.0, -1.0)} />
  );

  const summaries = wrapper.find(ChoiceSummary);

  expect(summaries.length).toEqual(2);
  expect(summaries.at(0).props().name).toEqual('Second choice');
  expect(summaries.at(1).props().name).toEqual('First choice');
});
