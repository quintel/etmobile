/* global it expect jest afterEach */

import React from 'react';
import { shallow } from 'enzyme';

import HiddenText from '../HiddenText';

it('renders a button when closed', () => {
  const wrapper = shallow(
    <HiddenText buttonText="Open">
      <p>Hello world!</p>
    </HiddenText>
  );

  expect(wrapper.find('button').length).toEqual(1);
  expect(wrapper.find('p').length).toEqual(0);
});

it('shows the text when the button is pressed', () => {
  const wrapper = shallow(
    <HiddenText buttonText="Open">
      <p>Hello world!</p>
    </HiddenText>
  );

  wrapper.instance().open();

  expect(wrapper.find('button').length).toEqual(0);
  expect(wrapper.find('p').length).toEqual(1);
});
