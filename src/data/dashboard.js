const dashboard = [
  {
    title: 'CO2 Emissions',
    query: 'dashboard_co2_emissions_versus_start_year',
    icon: 'co2',
    formatValue(value) {
      return `${Math.round(-value * 10000) / 100}%`;
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
    title: 'Leaderboard',
    icon: 'leaderboard',
    formatValue() {
      return 'INOP';
    }
  }
];

export default dashboard;
