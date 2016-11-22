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
    name: 'Build 800 offshore turbines',
    header: 'Wind',
    icon: 'wind',
    description: `
      Mix up a little more shadow color here, then we can put us a little
      shadow right in there.
    `,
    inputs: {
      number_of_energy_power_wind_turbine_offshore: 871.3
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
  }
];
