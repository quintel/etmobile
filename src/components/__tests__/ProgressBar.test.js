/* global it expect */

import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from '../ProgressBar';

it('sets the progress bar position at 0', () => {
  const wrapper = shallow(<ProgressBar current={0} total={19} />);

  // 20 possible positions, the zero position is at the first interval so that
  // the bar is visible.
  expect(wrapper.find('.amount').props().style.width).toEqual('5%');
});

it('sets the progress bar position at 100%', () => {
  const wrapper = shallow(<ProgressBar current={19} total={19} />);

  expect(wrapper.find('.amount').props().style.width).toEqual('100%');
});
