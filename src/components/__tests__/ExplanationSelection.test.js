/* global it expect jest */

import React from 'react';
// import { mount } from 'enzyme';
import { mountWithIntl } from '../../utils/intlEnzymeHelper';

import ExplanationSelection from '../ExplanationSelection';

it('permits selecting "yes"', () => {
  const onChange = jest.fn();

  const wrapper = mountWithIntl(
    <ExplanationSelection selected={false} onChange={onChange} />
  );

  const listEls = wrapper.find('.explanation-selection li');

  expect(listEls.get(0).className).not.toEqual('selected');
  expect(listEls.get(1).className).toEqual('selected');

  const button = wrapper.find('.explanation-selection button.yes');

  button.simulate('click');

  expect(onChange).toHaveBeenCalledWith(true);

  expect(listEls.get(0).className).toEqual('selected');
  expect(listEls.get(1).className).not.toEqual('selected');
});

it('permits selecting "no"', () => {
  const onChange = jest.fn();

  const wrapper = mountWithIntl(
    <ExplanationSelection selected onChange={onChange} />
  );

  const listEls = wrapper.find('.explanation-selection li');

  expect(listEls.get(0).className).toEqual('selected');
  expect(listEls.get(1).className).not.toEqual('selected');

  const button = wrapper.find('.explanation-selection button.no');

  button.simulate('click');

  expect(onChange).toHaveBeenCalledWith(false);

  expect(listEls.get(0).className).not.toEqual('selected');
  expect(listEls.get(1).className).toEqual('selected');
});

