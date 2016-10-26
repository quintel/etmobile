const dashboard = [
  {
    title: 'CO2 Emissions',
    query: 'dashboard_reduction_of_co2_emissions_versus_1990',
    icon: 'co2',
    formatValue(value) {
      return `${Math.round(value * 10000) / 100}%`;
    }
  },
  {
    title: 'Cost',
    query: 'total_costs',
    icon: 'costs',
    formatValue(value) {
      return `€${Math.round(value / 100000000) / 10} bln/yr`;
    }
  },
  {
    title: 'Renewability',
    query: 'renewability',
    icon: 'leaderboard',
    formatValue(value) {
      return `${Math.round(value * 10000) / 100}%`;
    }
  }
];

export default dashboard;
