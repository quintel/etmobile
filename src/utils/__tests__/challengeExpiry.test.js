/* global it expect */

import challengeExpiry from '../challengeExpiry';

Object.keys(challengeExpiry).forEach(key =>
  it(`${key} return a Date`, () =>
    expect(typeof challengeExpiry[key]().getTime).toEqual('function')
  )
);
