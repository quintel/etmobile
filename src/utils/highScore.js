import store from './store';

const lbKey = leaderboard => `score.${leaderboard}`;

/**
 * Retrieves the high score for the named leaderboard. Returns zero if no score
 * is set.
 *
 * @param  {string} [leaderboard='all'] The leaderboard value to get.
 * @return {number}                     The high score.
 */
export const getScore = (leaderboard = 'all') => {
  const score = store.getItem(lbKey(leaderboard));

  return (score && parseInt(score, 10)) || 0;
};

/**
 * Sets a new high score for the named leaderboad.
 *
 * If the given score is lower than the one stored, the score is not set and
 * false is returned. Otherwise, true is returned.
 *
 * @param {string} leaderboard The leaderboard to set.
 * @param {number} score       The new high score.
 *
 * @return {boolean}
 */
export const setScore = (leaderboard, score) => {
  if (getScore(leaderboard) < score) {
    store.setItem(lbKey(leaderboard), score);
    return true;
  }

  return false;
};
