/* global it expect jest jasmine spyOn */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Root from '../Root';
import Question from '../../components/Question';

const questions = [
  {
    code: 'ab',
    name: 'A or B?',
    description: { __html: 'A description of this first question' },
    choices: [
      { name: 'Choice A', icon: 'coal', inputs: {}, isCorrect: true },
      { name: 'Choice B', icon: 'wind', inputs: {} }
    ]
  },
  {
    code: 'cd',
    name: 'C or D?',
    description: { __html: 'A description of this other question' },
    choices: [
      { name: 'Choice C', icon: 'balloon', inputs: {} },
      { name: 'Choice D', icon: 'battery', inputs: {}, isCorrect: true }
    ]
  }
];

const dashboard = [{
  title: 'First Item',
  query: 'dashboard_co2_emissions_versus_start_year',
  icon: 'co2',
  formatValue(value) {
    return `${Math.round(-value * 10000) / 100}%`;
  }
}];

const stubAPI = () => ({
  createScenario: jest.fn().mockReturnValue(
    new Promise(r => r({ scenario: { id: 1 }, gqueries: {} }))
  ),
  updateScenario: jest.fn().mockReturnValue(
    new Promise(r => r({ scenario: { id: 1 }, gqueries: {} }))
  )
});

it('renders an input list', () => {
  const wrapper = shallow(
    <Root
      api={stubAPI()}
      dashboard={dashboard}
      questions={questions}
    />
  );

  expect(wrapper.find(Question).length).toEqual(1);
});

it('creates a new scenario when mounted', () => {
  const api = stubAPI();

  const cPromise = new Promise(r => r({ scenario: { id: 1 }, gqueries: {} }));
  const uPromise = new Promise(r => r({ scenario: { id: 1 }, gqueries: {} }));

  api.createScenario = jest.fn().mockReturnValue(cPromise);
  spyOn(api, 'updateScenario').and.callFake(() => (uPromise));

  const wrapper = mount(
    <Root
      api={api}
      dashboard={dashboard}
      questions={questions}
    />
  );

  return Promise.all([cPromise, uPromise]).then(() => {
    expect(api.createScenario).toHaveBeenCalled();

    expect(api.updateScenario).toHaveBeenCalledWith(
      1,
      {} /* inputs */,
      jasmine.any(Array) /* queries */
    );

    expect(wrapper.state('scenarioID')).toEqual(1);
  });
});

it('sends updated inputs to the API', () => {
  const api = stubAPI();
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  const wrapper = mount(
    <Root
      api={api}
      dashboard={dashboard}
      questions={questions}
    />
  );

  spyOn(api, 'updateScenario').and.callThrough();

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(api.updateScenario).toHaveBeenCalledWith(
      1,
      { abc: 10 } /* inputs */,
      jasmine.any(Array) /* queries */
    ));
});

it('shows the results page when all questions are answered', () => {
  const wrapper = mount(
    <Root
      api={stubAPI()}
      dashboard={dashboard}
      questions={questions}
    />
  );

  wrapper.setState({ lastChoice: { isCorrect: false }, currentQuestion: 9999 });

  expect(wrapper.find(Question).length).toEqual(0);
  expect(wrapper.find('.results').length).toEqual(1);
});

it('resumes with the next question when restarting', () => {
  const wrapper = mount(
    <Root
      api={stubAPI()}
      dashboard={dashboard}
      questions={questions}
    />
  );

  wrapper.setState({ lastChoice: { isCorrect: false }, currentQuestion: 1 });
  wrapper.instance().handleRestartGame();

  expect(wrapper.find(Question).length).toEqual(1);
  expect(wrapper.find('.results').length).toEqual(0);

  expect(wrapper.state('currentQuestion')).toEqual(1);
});

it('starts over when restarting with all questions answered', () => {
  const wrapper = mount(
    <Root
      api={stubAPI()}
      dashboard={dashboard}
      questions={questions}
    />
  );

  wrapper.setState({
    lastChoice: { isCorrect: false },
    currentQuestion: questions.length
  });

  wrapper.instance().handleRestartGame();

  expect(wrapper.find(Question).length).toEqual(1);
  expect(wrapper.find('.results').length).toEqual(0);

  expect(wrapper.state('currentQuestion')).toEqual(0);
});
