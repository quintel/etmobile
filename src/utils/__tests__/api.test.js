/* global it expect describe beforeEach afterEach */

import fetchMock from 'fetch-mock';
import { createScenario, fetchScenario, updateScenario } from '../api';

afterEach(fetchMock.restore);

describe('createScenario', () => {
  beforeEach(() => {
    fetchMock.post('http://etengine.dev/api/v3/scenarios', {
      id: 1,
      title: 'ETMobile',
      area_code: 'nl',
      start_year: 2013,
      end_year: 2050,
      url: 'http://etengine.dev/api/v3/scenarios/1'
    });
  });

  it('sends a request to create a scenario', () => (
    createScenario().then(() => {
      const [url, req] = fetchMock.lastCall();

      expect(url).toEqual('http://etengine.dev/api/v3/scenarios');
      expect(req.method).toEqual('POST');
    })
  ));

  it('sends a default area code and end year', () => (
    createScenario().then(() => {
      const [, req] = fetchMock.lastCall();
      const { scenario } = JSON.parse(req.body);

      expect(scenario.area_code).toEqual('nl');
      expect(scenario.end_year).toEqual(2050);
    })
  ));

  it('provides the response body as a JS object', () => (
    createScenario().then((data) => {
      expect(data.id).toEqual(1);
      expect(data.end_year).toEqual(2050);
    })
  ));
});

describe('fetchScenario', () => {
  beforeEach(() => {
    fetchMock.put('http://etengine.dev/api/v3/scenarios/1', {
      scenario: {
        id: 1,
        title: 'API',
        area_code: 'nl',
        start_year: 2013,
        end_year: 2050,
        url: 'http://etengine.dev/api/v3/scenarios/1',
        scaling: null,
        source: 'ETMobile',
        created_at: '2016-10-12T12:00:00.000+00:00'
      },
      gqueries: {}
    });
  });

  it('sends a request to fetch a scenario', () => (
    fetchScenario(1).then(() => {
      const [url, req] = fetchMock.lastCall();

      expect(url).toEqual('http://etengine.dev/api/v3/scenarios/1');
      expect(req.method).toEqual('PUT');
    })
  ));

  it('provides the response body as a JS object', () => (
    fetchScenario(1).then(({ scenario }) => {
      expect(scenario.id).toEqual(1);
      expect(scenario.end_year).toEqual(2050);
      expect(scenario.area_code).toEqual('nl');
    })
  ));

  it('returns a rejected promise when given a bad scenario ID', () => (
    fetchScenario().then(
      () => expect(true).toEqual(false),
      err => expect(err).toEqual('Invalid scenario ID: undefined')
    )
  ));

  it('rejects the promise if the scenario does not exist', () => {
    fetchMock.restore(); // remove successful mock

    fetchMock.put('http://etengine.dev/api/v3/scenarios/1', {
      status: 404,
      body: { errors: ['Scenario not found'] }
    });

    return fetchScenario(1).then(
      () => expect(true).toEqual(false),
      ({ response }) => expect(response.status).toEqual(404)
    );
  });
});

describe('updateScenario', () => {
  beforeEach(() => {
    fetchMock.put('http://etengine.dev/api/v3/scenarios/1', {
      scenario: {
        id: 1,
        title: 'API',
        area_code: 'nl',
        start_year: 2013,
        end_year: 2050,
        url: 'http://etengine.dev/api/v3/scenarios/1',
        scaling: null,
        source: 'ETMobile',
        created_at: '2016-10-12T12:00:00.000+00:00'
      },
      gqueries: {}
    });
  });

  it('sends a request to update a scenario', () => (
    updateScenario(1, {}).then(() => {
      const [url, req] = fetchMock.lastCall();

      expect(url).toEqual('http://etengine.dev/api/v3/scenarios/1');
      expect(req.method).toEqual('PUT');
    })
  ));

  it('sends the input values with the request', () => (
    updateScenario(1, { input_one: 2.0 }).then(() => {
      const [, req] = fetchMock.lastCall();
      const { scenario } = JSON.parse(req.body);

      expect(scenario.user_values.input_one).toEqual(2.0);
    })
  ));

  it('sends empty input values when none are provided', () => (
    updateScenario(1).then(() => {
      const [, req] = fetchMock.lastCall();
      const { scenario } = JSON.parse(req.body);

      expect(scenario.user_values).toEqual({});
    })
  ));

  it('returns a rejected promise when given a bad scenario ID', () => (
    updateScenario().then(
      () => expect(true).toEqual(false),
      err => expect(err).toEqual('Invalid scenario ID: undefined')
    )
  ));

  it('rejects the promise if the scenario does not exist', () => {
    fetchMock.restore(); // remove successful mock

    fetchMock.put('http://etengine.dev/api/v3/scenarios/1', {
      status: 404,
      body: { errors: ['Scenario not found'] }
    });

    return updateScenario(1).then(
      () => expect(true).toEqual(false),
      ({ response }) => expect(response.status).toEqual(404)
    );
  });

  it('rejects the promise if the inputs are invalid', () => {
    fetchMock.restore(); // remove successful mock

    fetchMock.put('http://etengine.dev/api/v3/scenarios/1', {
      status: 422,
      body: { errors: ['Input input_one cannot be greater than 1.5'] }
    });

    return updateScenario(1, { input_one: 2.0 }).then(
      () => expect(true).toEqual(false),
      ({ response }) => expect(response.status).toEqual(422)
    );
  });
});
