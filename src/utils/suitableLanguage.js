import store from './store';

export const storeLocale = name => store.setItem('locale', name);
export const clearLocale = () => store.removeItem('locale');

const selectFromList = (langs) => {
  const found = langs.find(lang => lang.match(/^(nl|en)/i));
  return (found && found.split('-')[0]) || 'en';
};

/**
 * Given an array of languages the user's browser accepts, returns the most
 * suitable support region code, or "en" if none are.
 */
export default langs => (
  selectFromList([store.getItem('locale'), ...langs].filter(i => i))
);
