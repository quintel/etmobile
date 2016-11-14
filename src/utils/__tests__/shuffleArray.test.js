/* global it expect describe beforeEach afterEach */

import shuffleArray from '../shuffleArray';

it('returns an array with the same elements as the original', () => {
  const original = [1, 3, 5, 7];
  const shuffled = shuffleArray(original);

  for (const item of original) {
    expect(shuffled.includes(item)).toEqual(true);
  }
});
