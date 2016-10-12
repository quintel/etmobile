/* global it expect jest */

import React from 'react';
import { shallow, mount } from 'enzyme';

import Root from '../Root';
import InputList from '../../components/InputList';

const stubAPI = () => ({
  createScenario: jest.fn().mockReturnValue(new Promise(r => r({ id: 1 }))),
  updateScenario: jest.fn().mockReturnValue(new Promise(r => r()))
});

it('renders an input list', () => {
  const wrapper = shallow(<Root api={stubAPI()} />);
  expect(wrapper.find(InputList).length).toEqual(1);
});

it('creates a new scenario when mounted', () => {
  const api = stubAPI();
  const cPromise = new Promise(r => r({ id: 1 }));

  api.createScenario = jest.fn().mockReturnValue(cPromise);

  const wrapper = mount(<Root api={api} />);

  return cPromise.then(() => {
    expect(api.createScenario).toHaveBeenCalled();
    expect(wrapper.state('scenarioID')).toEqual(1);
  });
});

it('sends updated inputs to the API', () => {
  const api = stubAPI();
  const wrapper = shallow(<Root api={api} />);

  wrapper.instance().handleUpdateInput('abc', 10);

  expect(api.updateScenario).toHaveBeenCalled();
});
