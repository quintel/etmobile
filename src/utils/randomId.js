/**
 * Creates a random string to identify something uniquely.
 * See http://stackoverflow.com/a/19964557.
 *
 * @return {strong} A 16 character string.
 */
export default () => (
  (`${Math.random().toString(36)}00000000000000000`).slice(2, 18)
);
