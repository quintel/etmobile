/* global it expect jest jasmine spyOn afterEach */

import React from 'react';
import { mount } from 'enzyme';

import Root from '../Root';
import Question from '../../components/Question';

import { setScore } from '../../utils/highScore';
import store from '../../utils/store';

afterEach(store.clear);

const choices = [
  { name: 'Choice A', description: '', icon: 'coal', inputs: {}, delta: 1 },
  { name: 'Choice B', description: '', icon: 'wind', inputs: {}, delta: 2 },
  { name: 'Choice C', description: '', icon: 'balloon', inputs: {}, delta: 1 },
  { name: 'Choice D', description: '', icon: 'battery', inputs: {}, delta: 2 }
];

const stubBase = () => ({
  update: jest.fn(),
  onAuth: cb => cb({ uid: 'xyz' }),
  auth: () => ({ signInAnonymously: Promise.resolve({ uid: 'xyz' }) })
});

it('renders an input list', () => {
  const wrapper = mount(
    <Root base={stubBase()} choices={choices} />
  );

  expect(wrapper.find(Question).length).toEqual(1);

  const [firstChoice, secondChoice] = wrapper.state('currentQuestion').choices;

  expect(firstChoice.name).toEqual('Choice A');
  expect(secondChoice.name).toEqual('Choice B');

  expect(wrapper.find('footer .correct-count').text()).toEqual('0');
});

it('increments correctChoices when a correct answer is given', () => {
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  const wrapper = mount(
    <Root choices={choices} base={stubBase()} />
  );

  const correct = wrapper.state('correctChoices');

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(wrapper.state('correctChoices')).toEqual(correct + 1));
});

it('does not increment correctChoices when a wrong answer is given', () => {
  const choice = { inputs: { abc: 10 }, isCorrect: false };

  const wrapper = mount(
    <Root choices={choices} base={stubBase()} />
  );

  const correct = wrapper.state('correctChoices');

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(wrapper.state('correctChoices')).toEqual(correct));
});

it('updates the high score list without a challenge', () => {
  const base = stubBase();
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  const wrapper = mount(
    <Root base={base} choices={choices} />
  );

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(base.update.mock.calls.length).toEqual(1));
});

it('updates the high score list with a challenge', () => {
  const base = stubBase();
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  setScore('all', 10);
  setScore('abc', 10);

  const wrapper = mount(
    <Root params={{ challengeId: 'abc' }} base={base} choices={choices} />
  );

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(base.update.mock.calls.length).toEqual(0));
});

it('does not update the high score list with a lower score', () => {
  const base = stubBase();
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  const wrapper = mount(
    <Root params={{ challengeId: 'abc' }} base={base} choices={choices} />
  );

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(base.update.mock.calls.length).toEqual(2));
});

it('shows the results page when all questions are answered', () => {
  const wrapper = mount(
    <Root base={stubBase()} choices={choices} />
  );

  wrapper.setState({
    lastChoice: { isCorrect: false },
    lastQuestion: { choices: [] },
    currentQuestion: 9999
  });

  expect(wrapper.find(Question).length).toEqual(0);
  expect(wrapper.find('.results').length).toEqual(1);
});

it('resumes with the next question when restarting', () => {
  const wrapper = mount(
    <Root base={stubBase()} choices={choices} />
  );

  wrapper.setState({
    lastChoice: { isCorrect: false },
    lastQuestion: { choices: [] }
  });

  wrapper.instance().handleRestartGame();

  expect(wrapper.find(Question).length).toEqual(1);
  expect(wrapper.find('.results').length).toEqual(0);

  const [firstChoice, secondChoice] = wrapper.state('currentQuestion').choices;

  expect(firstChoice.name).toEqual('Choice C');
  expect(secondChoice.name).toEqual('Choice D');

  expect(wrapper.find('footer .correct-count').text()).toEqual('0');
});

it('starts over when restarting with all questions answered', () => {
  const wrapper = mount(
    <Root base={stubBase()} choices={choices} />
  );

  wrapper.setState({
    lastChoice: { isCorrect: false },
    lastQuestion: { choices: [] },
    availableChoices: []
  });

  wrapper.instance().handleRestartGame();

  expect(wrapper.find(Question).length).toEqual(1);
  expect(wrapper.find('.results').length).toEqual(0);

  const [firstChoice, secondChoice] = wrapper.state('currentQuestion').choices;

  expect(firstChoice.name).toEqual('Choice A');
  expect(secondChoice.name).toEqual('Choice B');

  expect(wrapper.find('footer .correct-count').text()).toEqual('0');
});

/**
 * Authentication
 */

it('registers a new user', () => {
  const base = stubBase();
  const promise = Promise.resolve({ uid: 'xyz' });

  base.onAuth = jest.fn(cb => cb(null));
  base.auth = jest.fn().mockReturnValue({ signInAnonymously: () => promise });

  const wrapper = mount(
    <Root base={base} choices={choices} />
  );

  expect(base.onAuth).toHaveBeenCalled();
  expect(base.auth).toHaveBeenCalled();

  return promise.then(() => expect(wrapper.state('uid')).toEqual('xyz'));
});

it('authenticates an existing user', () => {
  const base = stubBase();

  base.onAuth = jest.fn(cb => cb({ uid: 'xyz' }));

  base.auth = jest.fn().mockReturnValue({
    signInAnonymously: () => Promise.resolve({ uid: 'xyz' })
  });

  const wrapper = mount(
    <Root base={base} choices={choices} />
  );

  expect(base.onAuth).toHaveBeenCalled();
  expect(base.auth).not.toHaveBeenCalled();

  expect(wrapper.state('uid')).toEqual('xyz');
});
