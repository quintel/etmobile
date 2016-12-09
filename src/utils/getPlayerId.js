import randomId from './randomId';

let storage;

if (process.env.NODE_ENV === 'test' &&
      (typeof localStorage === 'undefined' || localStorage === null)) {
  // eslint-disable-next-line
  const LocalStorage = require('node-localstorage').LocalStorage;

  // eslint-disable-next-line no-global-assign
  storage = new LocalStorage(`./tmp/scratch.${new Date().getTime()}`);
}

storage = storage || localStorage;

/**
 * Removes the stored playerId.
 * @return Returns nothing.
 */
export const clear = () => storage.removeItem('playerId');

/**
 * Fetches the unique player ID.
 *
 * @return {string} A 16-character string identifying the current player.
 */
export default () => {
  let playerId = storage.getItem('playerId');

  if (!playerId) {
    playerId = randomId();
    storage.setItem('playerId', playerId);
  }

  // Explicitly make the ID a string in case the visitor has tampered with
  // localStorage.
  return `${playerId}`;
};
