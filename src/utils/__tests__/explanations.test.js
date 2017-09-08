/* global it expect describe afterEach */

import store from '../store';

import {
  setShowExplanations,
  shouldShowExplanation,
  withExplanations
} from '../explanations';

afterEach(store.clear);

describe('withExplanations', () => {
  it('restores the original value when an exception is raised', () => {
    const orig = shouldShowExplanation();

    try {
      withExplanations(!orig, () => {
        throw new Error('oops!');
      });
    } catch (e) {
      // no-op
    } finally {
      expect(shouldShowExplanation()).toEqual(orig);
      setShowExplanations(orig);
    }
  });
});
