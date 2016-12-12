let storage; // eslint-disable-line import/no-mutable-exports

if (process.env.NODE_ENV === 'test' &&
      (typeof localStorage === 'undefined' || localStorage === null)) {
  // eslint-disable-next-line
  storage = require('localstorage-memory');
}

storage = storage || localStorage;

export default storage;
