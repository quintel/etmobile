/* global it expect jest jasmine spyOn afterEach */

import React from 'react';
import { mountWithIntl } from '../../utils/intlEnzymeHelper';

import Game from '../Game';
import Question from '../../components/Question';

import { setScore } from '../../utils/highScore';
import store from '../../utils/store';

import { hard as hardMode } from '../../data/gameModes';

afterEach(store.clear);

const choices = [
  {
    key: 'closeModernCoal',
    header: 'Choice A',
    name: 'Choice A',
    description: '',
    icon: 'coal',
    inputs: {},
    delta: 1
  },
  {
    key: 'buildOffshoreTurbines',
    header: 'Choice B',
    name: 'Choice B',
    description: '',
    icon: 'wind',
    inputs: {},
    delta: 2
  },
  {
    key: 'electricVehicles',
    header: 'Choice C',
    name: 'Choice C',
    description: '',
    icon: 'balloon',
    inputs: {},
    delta: 1
  },
  {
    key: 'batteries',
    header: 'Choice D',
    name: 'Choice D',
    description: '',
    icon: 'battery',
    inputs: {},
    delta: 2
  }
];

const stubBase = () => ({
  update: jest.fn(),
  onAuth: cb => cb({ uid: 'xyz' }),
  auth: () => ({ signInAnonymously: Promise.resolve({ uid: 'xyz' }) })
});

const stubMode = (attempts = 1) => ({ ...hardMode, attempts });

it('renders an input list', () => {
  const wrapper = mountWithIntl(
    <Game base={stubBase()} choices={choices} mode={stubMode()} />
  );

  expect(wrapper.find(Question).length).toEqual(1);

  const [firstChoice, secondChoice] = wrapper.state('currentQuestion').choices;

  expect(firstChoice.name).toEqual('Choice A');
  expect(secondChoice.name).toEqual('Choice B');

  expect(wrapper.find('.correct-count').text()).toEqual('0');
});

it('increments correctChoices when a correct answer is given', () => {
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  const wrapper = mountWithIntl(
    <Game choices={choices} base={stubBase()} mode={stubMode()} />
  );

  const correct = wrapper.state('correctChoices');

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(wrapper.state('correctChoices')).toEqual(correct + 1));
});

it('does not increment correctChoices when a wrong answer is given', () => {
  const choice = { inputs: { abc: 10 }, isCorrect: false };

  const wrapper = mountWithIntl(
    <Game choices={choices} base={stubBase()} mode={stubMode()} />
  );

  const correct = wrapper.state('correctChoices');

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(wrapper.state('correctChoices')).toEqual(correct));
});

it('resumes with the next question when attempts are remaining', () => {
  const choice = { inputs: { abc: 10 }, isCorrect: false };

  const wrapper = mountWithIntl(
    <Game choices={choices} base={stubBase()} mode={stubMode(3)} />
  );

  const correct = wrapper.state('correctChoices');
  const attempts = wrapper.state('attemptsRemaining');

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => {
      // correctChoices is not incremented
      expect(wrapper.state('correctChoices')).toEqual(correct);

      // one life is lost
      expect(wrapper.state('attemptsRemaining')).toEqual(attempts - 1);

      // two questions may be present: the old one transitioning out, and the
      // new one transitioning in.
      expect(wrapper.find(Question).length).toBeGreaterThanOrEqual(1);
      expect(wrapper.find('.results').length).toEqual(0);
    });
});

it('updates the high score list without a challenge', () => {
  const base = stubBase();
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  const wrapper = mountWithIntl(
    <Game base={base} choices={choices} mode={stubMode()} />
  );

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(base.update.mock.calls.length).toEqual(1));
});

it('does not update the high score list with a lower score', () => {
  const base = stubBase();
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  setScore(hardMode.endpoint, 10);
  setScore('abc', 10);

  const wrapper = mountWithIntl(
    <Game
      challengeId="abc"
      base={base}
      choices={choices}
      mode={stubMode()}
    />
  );

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(base.update.mock.calls.length).toEqual(0));
});

it('updates the high score list with a challenge', () => {
  const base = stubBase();
  const choice = { inputs: { abc: 10 }, isCorrect: true };

  const wrapper = mountWithIntl(
    <Game
      challengeId="abc"
      base={base}
      choices={choices}
      mode={stubMode()}
    />
  );

  return wrapper.instance().handleQuestionChoice(choice)
    .then(() => expect(base.update.mock.calls.length).toEqual(2));
});

it('shows the results page when all questions are answered', () => {
  const wrapper = mountWithIntl(
    <Game base={stubBase()} choices={choices} mode={stubMode()} />
  );

  wrapper.setState({
    answeredQuestions: [{
      name: 'P != NP?',
      selected: { isCorrect: false },
      choices: []
    }],
    currentQuestion: 9999,
    attemptsRemaining: 0
  });

  expect(wrapper.find(Question).length).toEqual(0);
  expect(wrapper.find('.results').length).toEqual(1);
});

it('resumes with the next question when restarting', () => {
  const wrapper = mountWithIntl(
    <Game base={stubBase()} choices={choices} mode={stubMode()} />
  );

  wrapper.setState({
    answeredQuestions: [{
      name: 'P != NP?',
      selected: { isCorrect: false },
      choices: []
    }],
    attemptsRemaining: 0
  });

  wrapper.instance().handleRestartGame();

  expect(wrapper.find(Question).length).toEqual(1);
  expect(wrapper.find('.results').length).toEqual(0);

  const [firstChoice, secondChoice] = wrapper.state('currentQuestion').choices;

  expect(firstChoice.name).toEqual('Choice C');
  expect(secondChoice.name).toEqual('Choice D');

  expect(wrapper.find('.correct-count').text()).toEqual('0');
});

it('starts over when restarting with all questions answered', () => {
  const wrapper = mountWithIntl(
    <Game base={stubBase()} choices={choices} mode={stubMode()} />
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

  expect(wrapper.find('.correct-count').text()).toEqual('0');
});

/**
 * Authentication
 */

it('registers a new user', () => {
  const base = stubBase();
  const promise = Promise.resolve({ uid: 'xyz' });

  base.onAuth = jest.fn(cb => cb(null));
  base.auth = jest.fn().mockReturnValue({ signInAnonymously: () => promise });

  const wrapper = mountWithIntl(
    <Game base={base} choices={choices} mode={stubMode()} />
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

  const wrapper = mountWithIntl(
    <Game base={base} choices={choices} mode={stubMode()} />
  );

  expect(base.onAuth).toHaveBeenCalled();
  expect(base.auth).not.toHaveBeenCalled();

  expect(wrapper.state('uid')).toEqual('xyz');
});
