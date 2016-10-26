/* global it expect */

import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from '../Dashboard';

it('renders a dashboard without query results', () => {
  const data = [{
    query: 'hello_world',
    title: 'Hi there!',
    icon: 'co2'
  }];

  const wrapper = shallow(<Dashboard items={data} results={{}} />);
  const items = wrapper.find('.dashboard-item');

  expect(items.length).toEqual(1);

  expect(items.find('span.icon').props().alt).toEqual('Hi there!');
  expect(items.find('.value').text().includes('—')).toEqual(true);
});

it('renders a dashboard with query results', () => {
  const data = [{
    query: 'hello_world',
    title: 'Hi there!',
    icon: 'co2'
  }];

  const results = { hello_world: 12.5 };

  const wrapper = shallow(<Dashboard items={data} results={results} />);
  const items = wrapper.find('.dashboard-item');

  expect(items.length).toEqual(1);

  expect(items.find('span.icon').props().alt).toEqual('Hi there!');
  expect(items.find('.value').text().includes('12.5')).toEqual(true);
  expect(items.find('.value').text().includes('—')).toEqual(false);
});

it('renders a dashboard with query results and a custom formatter', () => {
  const data = [{
    query: 'hello_world',
    title: 'Hi there!',
    icon: 'co2',
    formatValue(v) { return `Value: ${v * 2}`; }
  }];

  const results = { hello_world: 12.5 };

  const wrapper = shallow(<Dashboard items={data} results={results} />);
  const items = wrapper.find('.dashboard-item');

  expect(items.length).toEqual(1);

  expect(items.find('span.icon').props().alt).toEqual('Hi there!');
  expect(items.find('.value').text().includes('Value: 25')).toEqual(true);
  expect(items.find('.value').text().includes('—')).toEqual(false);
});
