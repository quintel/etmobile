/* global it expect */

import React from 'react';
import { shallow } from 'enzyme';

import Root from '../Root';
import InputList from '../../components/InputList';

it('renders an input list', () => {
  const wrapper = shallow(<Root />);
  expect(wrapper.find(InputList).length).toEqual(1);
});
