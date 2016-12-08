/* global it expect jest jasmine spyOn */

import React from 'react';
import { mount } from 'enzyme';

import Root from '../Root';
import Question from '../../components/Question';

const choices = [
  { name: 'Choice A', description: '', icon: 'coal', inputs: {}, delta: 1 },
  { name: 'Choice B', description: '', icon: 'wind', inputs: {}, delta: 2 },
  { name: 'Choice C', description: '', icon: 'balloon', inputs: {}, delta: 1 },
  { name: 'Choice D', description: '', icon: 'battery', inputs: {}, delta: 2 }
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

const stubBase = () => ({ update: jest.fn() });

it('renders an input list', () => {
  const wrapper = mount(
    <Root
      api={stubAPI()}
      base={stubBase()}
      dashboard={dashboard}
      choices={choices}
    />
  );

  expect(wrapper.find(Question).length).toEqual(1);

  const [firstChoice, secondChoice] = wrapper.state('currentQuestion').choices;

  expect(firstChoice.name).toEqual('Choice A');
  expect(secondChoice.name).toEqual('Choice B');

  expect(wrapper.find('footer .correct-count').text()).toEqual('0');
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
      base={stubBase()}
      dashboard={dashboard}
      choices={choices}
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
      base={stubBase()}
      dashboard={dashboard}
      choices={choices}
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

it('increments correctChoices when a correct answer is given', () => {
  const api = stubAPI();
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  const wrapper = mount(
    <Root api={api} dashboard={dashboard} choices={choices} base={stubBase()} />
  );

  const correct = wrapper.state('correctChoices');

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(wrapper.state('correctChoices')).toEqual(correct + 1));
});

it('does not increment correctChoices when a wrong answer is given', () => {
  const api = stubAPI();
  const choice = { inputs: { abc: 10 }, isCorrect: false };

  const wrapper = mount(
    <Root api={api} dashboard={dashboard} choices={choices} base={stubBase()} />
  );

  const correct = wrapper.state('correctChoices');

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(wrapper.state('correctChoices')).toEqual(correct));
});

it('updates the high score list without a challenge', () => {
  const api = stubAPI();
  const base = stubBase();
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  const wrapper = mount(
    <Root
      api={api}
      base={base}
      dashboard={dashboard}
      choices={choices}
    />
  );

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(base.update.mock.calls.length).toEqual(1));
});

it('updates the high score list with a challenge', () => {
  const api = stubAPI();
  const base = stubBase();
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  const wrapper = mount(
    <Root
      params={{ challengeId: 'abc' }}
      api={api}
      base={base}
      dashboard={dashboard}
      choices={choices}
    />
  );

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(base.update.mock.calls.length).toEqual(2));
});

it('shows the results page when all questions are answered', () => {
  const wrapper = mount(
    <Root
      api={stubAPI()}
      base={stubBase()}
      dashboard={dashboard}
      choices={choices}
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
      base={stubBase()}
      dashboard={dashboard}
      choices={choices}
    />
  );

  wrapper.setState({ lastChoice: { isCorrect: false } });
  wrapper.instance().handleRestartGame();

  expect(wrapper.find(Question).length).toEqual(1);
  expect(wrapper.find('.results').length).toEqual(0);

  const [firstChoice, secondChoice] = wrapper.state('currentQuestion').choices;

  expect(firstChoice.name).toEqual('Choice C');
  expect(secondChoice.name).toEqual('Choice D');

  expect(wrapper.find('footer .correct-count').text()).toEqual('0');
});

it('starts over when restarting with all questions answered', () => {
  const wrapper = mount(
    <Root
      api={stubAPI()}
      base={stubBase()}
      dashboard={dashboard}
      choices={choices}
    />
  );

  wrapper.setState({
    lastChoice: { isCorrect: false },
    availableChoices: []
  });

  wrapper.instance().handleRestartGame();

  expect(wrapper.find(Question).length).toEqual(1);
  expect(wrapper.find('.results').length).toEqual(0);

  const [firstChoice, secondChoice] = wrapper.state('currentQuestion').choices;

  expect(firstChoice.name).toEqual('Choice A');
  expect(secondChoice.name).toEqual('Choice B');

  expect(wrapper.find('footer .correct-count').text()).toEqual('0');
});
