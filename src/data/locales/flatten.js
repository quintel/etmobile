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

export default flatten;
