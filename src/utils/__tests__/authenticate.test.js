/* global it expect jest */

import authenticate from '../authenticate';

const stubBase = () => ({
  onAuth: cb => cb({ uid: 'xyz' }),
  auth: () => ({ signInAnonymously: cb => cb({ uid: 'xyz' }) })
});

it('creates a new visitor', () => {
  const base = stubBase();
  const promise = Promise.resolve({ uid: 'xyz' });

  base.onAuth = jest.fn(cb => cb(null));

  base.auth = jest.fn().mockReturnValue({
    signInAnonymously: () => promise
  });

  authenticate(base, ({ uid }) => {
    expect(uid).toEqual('xyz');
  });

  expect(base.onAuth).toHaveBeenCalled();
  expect(base.auth).toHaveBeenCalled();

  return promise.then(({ uid }) => expect(uid).toEqual('xyz'));
});

it('signs in an existing visitor', () => {
  const base = stubBase();

  base.onAuth = jest.fn(cb => cb({ uid: 'xyz' }));
  base.auth = jest.fn();

  authenticate(base, ({ uid }) => {
    expect(uid).toEqual('xyz');
  });

  expect(base.onAuth).toHaveBeenCalled();
  expect(base.auth).not.toHaveBeenCalled();
});
