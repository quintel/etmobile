import 'whatwg-fetch';

const endpoint = 'http://etengine.dev';

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
  }).then(checkStatus).then(parseJSON)
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
