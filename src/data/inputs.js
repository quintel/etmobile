const inputs = [
  {
    code: 'number_of_energy_power_wind_turbine_offshore',
    name: 'Coal or wind?',
    image: 'power.png',
    inputs: [
      'number_of_energy_power_combined_cycle_coal',
      'number_of_energy_power_wind_turbine_offshore'
    ],
    choices: [
      { name: '3 coal plants', values: [3.0, 73.4] },
      { name: '800 offshore turbines', values: [0.31, 871.3] }
    ],
    description: {
      __html: `
        <p>
          Let your imagination be your guide. Maybe there's a little something
          happening right here. Follow the lay of the land. It's most important.
          Let's put a touch more of the magic here.
        </p>
      `
    }
  },
  {
    code: 'number_of_energy_power_combined_cycle_network_gas',
    name: 'District heat or CHPs?',
    image: 'heaters.png',
    inputs: [
      'households_water_heater_micro_chp_network_gas_share',
      'households_water_heater_district_heating_steam_hot_water_share'
    ],
    choices: [
      { name: 'Micro-CHPs', values: [40.0, 3.4] },
      { name: 'District heat', values: [0, 43.4] }
    ],
    description: {
      __html: `
        <p>
          Let's get wild today. Trees grow however makes them happy. But they're
          very easily killed. Clouds are delicate. We spend so much of our life
          looking - but never seeing. They say everything looks better with odd
          numbers of things. But sometimes I put even numbers—just to upset the
          critics.
        </p>
      `
    }
  },
  {
    code: 'transport_car_using_electricity_share',
    name: 'Electric or hydrogen cars?',
    image: 'cars.png',
    inputs: [
      'transport_car_using_gasoline_mix_share',
      'transport_car_using_electricity_share',
      'transport_car_using_hydrogen_share'
    ],
    choices: [
      { name: 'Electric cars', values: [0, 67.66, 0] },
      { name: 'Hydrogen cars', values: [0, 0.14, 67.52] }
    ],
    description: {
      __html: `
        <p>
          We'll paint one happy little tree right here. Now let's put some happy
          little clouds in here. Let's make a nice big leafy tree. Let your
          imagination be your guide. Just think about these things in your mind
          - then bring them into your world.
        </p>
      `
    }
  }
];

export default inputs;
