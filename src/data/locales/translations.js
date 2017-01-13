const files = [
  'app',
  'challenges',
  'choices',
  'footer',
  'frontPage',
  'game',
  'leaderboard',
  'summary'
];

const flatten = (nestedMessages, prefix = '') => (
  Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
    } else {
      Object.assign(messages, flatten(value, prefixedKey));
    }

    return messages;
  }, {})
);

export default (locale) => {
  const messages = files.reduce((memo, name) => (
    // eslint-disable-next-line
    { ...memo, [name]: require(`./${locale}/${name}`).default }
  ), {});

  return flatten(messages);
};
