/* global it expect jest */

import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { mountWithIntl } from '../../utils/intlEnzymeHelper';

import NewChallenge from '../NewChallenge';

const mockBase = () => ({ post: jest.fn().mockReturnValue(Promise.resolve()) });

it('render a name field', () => {
  const wrapper = mountWithIntl(
    <NewChallenge base={mockBase()} defaultName="Hi" />
  );

  expect(wrapper.find('input[name="name"]').length).toEqual(1);
});

it('triggers onSubmit when submitting', () => {
  const promise = Promise.resolve();
  const base = {
    post: jest.fn().mockReturnValue(promise),
    onAuth: cb => cb({ uid: 'abc' })
  };

  const wrapper = mountWithIntl(
    <MemoryRouter initialEntries={['/new-challenge']}>
      <div>
        <Route
          path="/new-challenge"
          render={() => <NewChallenge base={base} defaultName="Hi" />}
        />
        <Route
          path="/play/:challengeId"
          render={({ match: { params } }) => <em>{params.challengeId}</em>}
        />
      </div>
    </MemoryRouter>
  );

  const form = wrapper.find('form');
  const preventDefault = jest.fn();

  form.simulate('submit', { preventDefault });

  expect(preventDefault).toHaveBeenCalled();
  expect(base.post).toHaveBeenCalled();

  return promise.then(() => {
    expect(wrapper.find('em').text().length).toEqual(16);
  });
});

it('does not submit if the name is blank', () => {
  const base = mockBase();
  const wrapper = mountWithIntl(<NewChallenge base={base} defaultName="  " />);
  const form = wrapper.find('form');
  const preventDefault = jest.fn();

  form.simulate('submit', { preventDefault });

  expect(preventDefault).toHaveBeenCalled();
  expect(base.post).not.toHaveBeenCalled();
});

it('shows an error when the post fails', () => {
  const promise = Promise.reject();
  const base = {
    post: jest.fn().mockReturnValue(promise),
    onAuth: cb => cb({ uid: 'abc' })
  };

  const wrapper = mountWithIntl(
    <NewChallenge base={base} defaultName="Hi" />
  );

  const form = wrapper.find('form');
  const preventDefault = jest.fn();

  form.simulate('submit', { preventDefault });

  expect(preventDefault).toHaveBeenCalled();
  expect(base.post).toHaveBeenCalled();

  return promise.catch(() => {
    expect(wrapper.state('errors')).toEqual([
      'Sorry, there was an error starting your challenge.'
    ]);
  });
});
