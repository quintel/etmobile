import Rebase from 're-base';

/* istanbul ignore next */
const assertEnv = (key) => {
  const value = process.env[key];

  if (!value || !value.trim().length) {
    throw new Error(`Missing ${key} from .env`);
  }

  return value;
};

const base = Rebase.createClass({
  apiKey: assertEnv('REACT_APP_FIREBASE_API_KEY'),
  authDomain: assertEnv('REACT_APP_FIREBASE_AUTH_DOMAIN'),
  databaseURL: assertEnv('REACT_APP_FIREBASE_DATABASE_URL')
});

export default base;
