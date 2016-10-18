import 'whatwg-fetch';

const endpoint = 'https://beta-engine.energytransitionmodel.com';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

/**
 * Asserts that the request was successful, else rejects the promise.
 */
const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;

  throw error;
};

/**
 * Passes the JSON response to the promise.
 */
const parseJSON = response => response.json();

/**
 * Reduces gquery results from ETEngine to a simple object containing keys and
 * the future value of each query.
 */
const simplifyScenario = ({ gqueries, ...rest }) => {
  const queryResults = Object.keys(gqueries).reduce((memo, key) => (
    { ...memo, [key]: gqueries[key].future }
  ), {});

  return { ...rest, gqueries: queryResults };
};

/**
 * Creates a new scenario on ETEngine.
 * @return Promise
 */
export const createScenario = () => (
  fetch(`${endpoint}/api/v3/scenarios`, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      scenario: {
        area_code: 'nl',
        end_year: 2050,
        source: 'ETMobile'
      }
    })
  }).then(checkStatus).then(parseJSON).then(data => (
    // Normalize the response to be like updateScenario.
    { scenario: data, gqueries: {} }
  ))
);

/**
 * Fetches an existing scenario from ETEngine.
 *
 * The promise will be rejected if the scenario does not exist.
 *
 * @param  {number} id The scenario ID.
 * @return {Promise}
 */
export const fetchScenario = (id) => {
  if (typeof id !== 'number') {
    return Promise.reject(`Invalid scenario ID: ${id}`);
  }

  return fetch(`${endpoint}/api/v3/scenarios/${id}`, {
    headers,
    method: 'PUT'
  }).then(checkStatus).then(parseJSON);
};

/**
 * Updates an existing scenario on ETEngine.
 *
 * The promise will be rejected if the scenario does not exist, or the input
 * values provided result in a server-side validation error.
 *
 * @param {number} id The scenario ID
 * @param {object} userValues Input keys and values to be sent
 * @param {array} queries Queries results to be requested.
 *
 * @return {Promise}
 */
export const updateScenario = (id, userValues = {}, queries = []) => {
  if (typeof id !== 'number') {
    return Promise.reject(`Invalid scenario ID: ${id}`);
  }

  return fetch(`${endpoint}/api/v3/scenarios/${id}`, {
    headers,
    method: 'PUT',
    body: JSON.stringify({
      autobalance: true,
      scenario: { user_values: userValues },
      gqueries: queries
    })
  }).then(checkStatus).then(parseJSON).then(simplifyScenario);
};

/**
 * Internal: Tracks inputs and queries which should be sent to ETEngine in the
 * next request.
 */
class PendingRequest {
  constructor() {
    this.inputs = {};
    this.queries = new Set();

    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  merge(inputs, queries) {
    this.inputs = { ...this.inputs, ...inputs };
    for (const query of queries) { this.queries.add(query); }
  }
}

/**
 * Contains the current and next (pending) request. Exported for tests.
 */
export const requests = { current: null, next: null };

/**
 * Updates an existing scenario on ETEngine.
 *
 * Semantically identical to updateScenario, updateScenarioQueued will wait to
 * send new input values to ETEngine if there is already a request pending.
 * Multiple calls to updateScenarioQueued will merge all requests into one.
 *
 * @param {number} id The scenario ID
 * @param {object} userValues Input keys and values to be sent
 * @param {array} queries Queries results to be requested.
 *
 * @return {Promise}
 */
export const updateScenarioQueued = (id, userValues = {}, queries = []) => {
  if (!requests.current) {
    // If no request is pending, send the values immediately.
    requests.current = updateScenario(id, userValues, queries).then((data) => {
      requests.current = null;
      return data;
    });

    return requests.current;
  }

  requests.next = requests.next || new PendingRequest();
  requests.next.merge(userValues, queries);

  requests.current.then((data) => {
    if (requests.next) {
      // Send the next request.
      requests.current = updateScenario(
        id, requests.next.inputs, Array.from(requests.next.queries)
      ).then(requests.next.resolve, requests.next.reject);

      requests.next = null;
    }

    return data;
  });

  return requests.next.promise;
};
