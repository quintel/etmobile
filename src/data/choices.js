export default [
  {
    name: 'Build a coal plant',
    header: 'Coal',
    icon: 'coal',
    description: `
      In painting, you have unlimited power. You have the ability to move
      mountains. You can bend rivers.
    `,
    inputs: {
      number_of_energy_power_combined_cycle_coal: 1.0
    }
  },
  {
    name: 'Build a gas plant',
    header: 'Gas',
    icon: 'gas',
    description: `
      You will build a(n additional) Combined Cycle Gas Turbine (CCGT) power
      plant with an output capacity of 800 MW.
    `,
    inputs: {
      number_of_energy_power_combined_cycle_network_gas: 1.0
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
    icon: 'ledLighting',
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
    icon: 'solar',
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
    icon: 'house',
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
    icon: 'radiator',
    description: `
      Look around. Look at what we have. Beauty is everywhere – you only have to
      look to see it.
    `,
    inputs: {
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
    name: 'Increase electric trucks with 20%',
    header: 'Electric trucks',
    icon: 'trucks',
    description: `
      Don’t forget to tell these special people in your life just how special
      they are to you.
    `,
    inputs: {
      transport_truck_using_electricity_share: 20.0
    }
  },
  {
    name: 'Increase LNG trucks with 20%',
    header: 'LNG trucks',
    icon: 'truck',
    description: `
      Don’t forget to tell these special people in your life just how special
      they are to you.
    `,
    inputs: {
      transport_truck_using_lng_mix_share: 20
    }
  },
  {
    name: 'Increase LNG ships with 20%',
    header: 'LNG ships',
    icon: 'lngShips',
    description: `
      Don’t forget to tell these special people in your life just how special
      they are to you.
    `,
    inputs: {
      transport_ship_using_lng_mix_share: 20
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
    icon: 'house',
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
    icon: 'house',
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
    name: 'make oil cheap',
    header: 'cheaper oil',
    icon: 'oil',
    description: `
      don’t forget to tell these special people in your life just how special
      they are to you.
    `,
    inputs: {
      costs_oil: -50
    }
  },
  {
    name: 'make refineries 1% per year more efficient',
    header: 'more efficient refineries',
    icon: 'wrench',
    description: `
      don’t forget to tell these special people in your life just how special
      they are to you.
    `,
    inputs: {
      industry_useful_demand_for_chemical_refineries_electricity_efficiency: 1
    }
  }
];
