import store from './store';

/**
 * Returns whether the user should be shown an explanation after selecting a
 * choice.
 */
export const shouldShowExplanation = () => (
  store.getItem('showExplanations') !== 'false'
);

/**
 * Sets the visitors preference for being shown explanations after selecting
 * each choice.
 */
export const setShowExplanations = show => (
  store.setItem('showExplanations', show)
);

export const withExplanations = (dismiss, code) => {
  const orig = shouldShowExplanation();

  try {
    setShowExplanations(dismiss);
    code();
  } finally {
    setShowExplanations(orig);
  }
};
