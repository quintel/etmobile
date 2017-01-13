/**
 * Given an array of languages the user's browser accepts, returns the most
 * suitable support region code, or "en" if none are.
 */
export default (langs) => {
  const found = langs.find(lang => lang.match(/^(nl|en)/i));
  return (found && found.split('-')[0]) || 'en';
};
