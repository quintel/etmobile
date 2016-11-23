export default [
  {
    name: 'Build 3 coal plants',
    header: 'Coal',
    icon: 'coal',
    description: `
      In painting, you have unlimited power. You have the ability to move
      mountains. You can bend rivers.
    `,
    inputs: {
      number_of_energy_power_combined_cycle_coal: 3.0
    }
  },
  {
    name: 'Build 250 offshore turbines',
    header: 'Wind',
    icon: 'wind',
    description: `
      Mix up a little more shadow color here, then we can put us a little
      shadow right in there.
    `,
    inputs: {
      number_of_energy_power_wind_turbine_offshore: 321.3
    }
  },
  {
    name: 'Store electricity in batteries',
    icon: 'battery',
    description: `
      See how you can move things around? You have unlimited power on this
      canvas – you can literally, literally move mountains.
    `,
    inputs: {
      households_flexibility_p2p_electricity_market_penetration: 100
    }
  },
  {
    name: 'Use LED light bulbs',
    icon: 'ledLighting',
    description: `
      Look around. Look at what we have. Beauty is everywhere – you only have to
      look to see it.
    `,
    inputs: {
      households_lighting_led_electricity_share: 100
    }
  },
  {
    name: 'Use LED light bulbs in offices',
    icon: 'ledLightingOffices',
    description: `
      Look around. Look at what we have. Beauty is everywhere – you only have to
      look to see it.
    `,
    inputs: {
      buildings_lighting_led_electricity_share: 100
    }
  },
  {
    name: 'Install solar PV panels',
    icon: 'solarPV',
    description: `
      Look around. Look at what we have. Beauty is everywhere – you only have to
      look to see it.
    `,
    inputs: {
      households_solar_pv_solar_radiation_market_penetration: 100
    }
  },
  {
    name: 'Replace old with new houses',
    icon: 'House replacement',
    description: `
      Look around. Look at what we have. Beauty is everywhere – you only have to
      look to see it.
    `,
    inputs: {
      households_number_of_old_houses: 4.7,
      households_number_of_new_houses: 2.7
    }
  },
  {
    name: 'Use hybrid heat pumps',
    icon: 'hybridHeatPump',
    description: `
      Look around. Look at what we have. Beauty is everywhere – you only have to
      look to see it.
    `,
    inputs: {
      households_space_heater_combined_network_gas_share: 0,
      households_space_heater_heatpump_ground_water_electricity_share: 0,
      households_space_heater_district_heating_steam_hot_water_share: 0,
      households_space_heater_heatpump_air_water_electricity_share: 0,
      households_space_heater_wood_pellets_share: 0,
      households_space_heater_electricity_share: 0,
      households_space_heater_network_gas_share: 0,
      households_space_heater_crude_oil_share: 0,
      households_space_heater_coal_share: 0,
      households_space_heater_hybrid_heatpump_air_water_electricity_share: 100
    }
  },
  {
    name: '5% of car journeys instead done by train',
    header: 'Travel by train',
    icon: 'train',
    description: `
      They say everything looks better with odd numbers of things. But sometimes
      I put even numbers – just to upset the critics.
    `,
    inputs: {
      transport_useful_demand_car_kms: -5,
      transport_useful_demand_trains: 5
    }
  },
  {
    name: 'Add one million electric cars',
    header: 'Travel by electric car',
    icon: 'electricVehicle',
    description: `
      Don’t forget to tell these special people in your life just how special
      they are to you.
    `,
    inputs: {
      transport_car_using_electricity_share: 20.0
    }
  },
  {
    name: 'Make fossil cars more efficient',
    header: 'Fossil cars more efficient',
    icon: 'combustionEngine',
    description: `
      Don’t forget to tell these special people in your life just how special
      they are to you.
    `,
    inputs: {
      transport_car_using_diesel_mix_efficiency: 2
    }
  },
  {
    name: 'Double insulation of existing houses',
    header: 'Insulate existing houses',
    icon: 'insulateOldHouses',
    description: `
      Don’t forget to tell these special people in your life just how special
      they are to you.
    `,
    inputs: {
      households_insulation_level_old_houses: 1.0
    }
  },
  {
    name: 'Double insulation of new houses',
    header: 'Insulate new houses',
    icon: 'insulateNewHouses',
    description: `
      Don’t forget to tell these special people in your life just how special
      they are to you.
    `,
    inputs: {
      households_insulation_level_new_houses: 3.0
    }
  },
  {
    name: 'Make 50% of gas green',
    header: '50% green gas',
    icon: 'greenGas',
    description: `
      Don’t forget to tell these special people in your life just how special
      they are to you.
    `,
    inputs: {
      green_gas_total_share: 50,
      natural_gas_total_share: 50
    }
  },
  {
    name: 'Make oil cheap',
    header: 'Cheaper oil',
    icon: 'oil',
    description: `
      Don’t forget to tell these special people in your life just how special
      they are to you.
    `,
    inputs: {
      costs_oil: -50
    }
  }
];
