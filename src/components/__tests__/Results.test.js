/* global it expect */

import React from 'react';
import { shallow } from 'enzyme';

import Results from '../Results';

it('renders without errors', () => {
  const wrapper = shallow(<Results />);

  expect(wrapper.find('h1').text()).toEqual('Summary');
});
