import randomId from './randomId';
import store from './store';

/**
 * Removes the stored playerId.
 * @return Returns nothing.
 */
export const clear = () => store.removeItem('playerId');

/**
 * Fetches the unique player ID.
 *
 * @return {string} A 16-character string identifying the current player.
 */
export default () => {
  let playerId = store.getItem('playerId');

  if (!playerId) {
    playerId = randomId();
    store.setItem('playerId', playerId);
  }

  return playerId;
};
