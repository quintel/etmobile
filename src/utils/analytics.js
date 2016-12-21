import {
  initialize,
  pageview as gaPageview,
  set as gaSet
} from 'react-ga';

const id = process.env.REACT_APP_ANALYTICS_KEY;

let pageview; // eslint-disable-line import/no-mutable-exports
let set;  // eslint-disable-line import/no-mutable-exports

/* istanbul ignore if */
if (process.env.NODE_ENV === 'production' && id && id.trim().length) {
  initialize(id);

  pageview = gaPageview;
  set = gaSet;
} else {
  pageview = () => {};
  set = () => {};
}

export { pageview, set };
