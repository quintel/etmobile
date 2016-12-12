/**
 * Anonymously authenticates a visitor.
 *
 * @param  {Rebase}   base Re-base connection.
 * @param  {Function} cb   Callback which receives the auth data.
 */
export default (base, cb) => {
  base.onAuth(data => (
    data ? cb(data) : base.auth().signInAnonymously().then(cb)
  ));
};
