/* global it expect jest jasmine spyOn */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Root from '../Root';
import Question from '../../components/Question';

const stubAPI = () => ({
  createScenario: jest.fn().mockReturnValue(
    new Promise(r => r({ scenario: { id: 1 }, gqueries: {} }))
  ),
  updateScenario: jest.fn().mockReturnValue(
    new Promise(r => r({ scenario: { id: 1 }, gqueries: {} }))
  )
});

it('renders an input list', () => {
  const wrapper = shallow(<Root api={stubAPI()} />);
  expect(wrapper.find(Question).length).toEqual(1);
});

it('creates a new scenario when mounted', () => {
  const api = stubAPI();

  const cPromise = new Promise(r => r({ scenario: { id: 1 }, gqueries: {} }));
  const uPromise = new Promise(r => r({ scenario: { id: 1 }, gqueries: {} }));

  api.createScenario = jest.fn().mockReturnValue(cPromise);
  spyOn(api, 'updateScenario').and.callFake(() => (uPromise));

  const wrapper = mount(<Root api={api} />);

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
  const wrapper = mount(<Root api={api} />);
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  spyOn(api, 'updateScenario').and.callThrough();

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(api.updateScenario).toHaveBeenCalledWith(
      1,
      { abc: 10 } /* inputs */,
      jasmine.any(Array) /* queries */
    ));
});

it('shows the results page when all questions are answered', () => {
  const wrapper = mount(<Root api={stubAPI()} />);

  wrapper.setState({ currentQuestion: 9999 });

  expect(wrapper.find(Question).length).toEqual(0);
  expect(wrapper.find('.results').length).toEqual(1);
});
