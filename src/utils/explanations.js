import store from './store';
import localeSettings from '../data/locales/settings';
import suitableLanguage from './suitableLanguage';

/**
 * Determines if the current locale is able to support explanation texts between
 * questions.
 */
export const explanationsSupported = () => (
  localeSettings(suitableLanguage(['nl'])).doesSupportExplanations
);

/**
 * Returns whether the user should be shown an explanation after selecting a
 * choice.
 */
export const shouldShowExplanation = () => (
  explanationsSupported() && store.getItem('showExplanations') !== 'false'
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
