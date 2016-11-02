/* global describe it expect */

import data from '../dashboard';

const findItem = query => data.find(item => item.title === query);

// Sanity check: all formatValue functions must return a string.
for (const itemData of data) {
  if (itemData.hasOwnProperty('formatValue')) {
    it(`${itemData.query}.formatValue runs, returning a string`, () => {
      expect(typeof itemData.formatValue(8.75)).toEqual('string');
    });
  }
}

describe('total_costs', () => {
  it('formats values in billions of euros per year', () => {
    const item = findItem('Cost');
    expect(item.formatValue(1000000000)).toEqual('€1 bln/yr');
  });

  it('rounds high precision values', () => {
    const item = findItem('Cost');
    expect(item.formatValue(1230000000)).toEqual('€1.2 bln/yr');
  });
});

describe('dashboard_reduction_of_co2_emissions_versus_1990', () => {
  it('formats values as a percentage', () => {
    const item = findItem('CO2 Emissions');
    expect(item.formatValue(0.125)).toEqual('12.5%');
  });

  it('rounds high precision values', () => {
    const item = findItem('CO2 Emissions');
    expect(item.formatValue(0.125299128992)).toEqual('12.53%');
  });
});

describe('leaderboard', () => {
  it('is marked as INOP', () => {
    const item = findItem('Leaderboard');
    expect(item.formatValue()).toEqual('INOP');
  });
});
