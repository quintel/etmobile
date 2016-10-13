/* global it expect jest */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Root from '../Root';
import InputList from '../../components/InputList';

const stubAPI = () => ({
  createScenario: jest.fn().mockReturnValue(new Promise(r => r({ id: 1 }))),
  updateScenario: jest.fn().mockReturnValue(
    new Promise(r => r({ scenario: { id: 1 }, gqueries: {} }))
  )
});

it('renders an input list', () => {
  const wrapper = shallow(<Root api={stubAPI()} />);
  expect(wrapper.find(InputList).length).toEqual(1);
});

it('creates a new scenario when mounted', () => {
  const api = stubAPI();

  const cPromise = new Promise(r => r({ id: 1 }));
  const uPromise = new Promise(r => r({ scenario: { id: 1 }, gqueries: {} }));

  api.createScenario = jest.fn().mockReturnValue(cPromise);
  api.updateScenario = jest.fn().mockReturnValue(uPromise);

  const wrapper = mount(<Root api={api} />);

  return Promise.all([cPromise, uPromise]).then(() => {
    expect(api.createScenario).toHaveBeenCalled();
    expect(api.updateScenario).toHaveBeenCalled();
    expect(wrapper.state('scenarioID')).toEqual(1);
  });
});

it('sends updated inputs to the API', () => {
  const api = stubAPI();
  const wrapper = shallow(<Root api={api} />);

  return wrapper.instance().handleUpdateInput('abc', 10)
    .then(() => expect(api.updateScenario).toHaveBeenCalled())
    .catch(err => expect(err).toEqual(false));
});
