const questions = [
  {
    code: 'coal_or_wind',
    name: 'Coal or wind?',
    choices: [
      {
        name: 'Build 3 coal plants',
        icon: 'coal',
        inputs: {
          number_of_energy_power_combined_cycle_coal: 3.0
        }
      },
      {
        name: 'Build 800 offshore turbines',
        icon: 'wind',
        isCorrect: true,
        inputs: {
          number_of_energy_power_wind_turbine_offshore: 871.3
        }
      }
    ],
    description: {
      __html: `
        <p>
          I remember when my Dad told me as a kid, “If you want to catch a
          rabbit, stand behind a tree and make a noise like a carrot. Then when
          the rabbit comes by you grab him.” Works pretty good until you try to
          figure out what kind of noise a carrot makes…
        </p>
      `
    }
  },
  {
    code: 'batteries_or_hydro',
    name: 'Batteries or LED lightbulbs?',
    choices: [
      {
        name: 'Store electricity in batteries',
        icon: 'battery',
        inputs: {
          households_flexibility_p2p_electricity_market_penetration: 100
        }
      },
      {
        name: 'Use LED light bulbs',
        icon: 'ledLighting',
        isCorrect: true,
        inputs: {
          households_lighting_led_electricity_share: 100
        }
      }
    ],
    description: {
      __html: `
        <p>
          In painting, you have unlimited power. You have the ability to move
          mountains. You can bend rivers. But when I get home, the only thing I
          have power over is the garbage.
        </p>
      `
    }
  },
  {
    code: 'electric_vehicles_or_trains',
    name: 'Travel by electric car or by train?',
    choices: [
      {
        name: 'Add one million electric cars',
        icon: 'electricVehicle',
        isCorrect: true,
        inputs: {
          transport_car_using_electricity_share: 20.0
        }
      },
      {
        name: '5% of car journeys instead done by train',
        icon: 'train',
        inputs: {
          transport_useful_demand_car_kms: -5,
          transport_useful_demand_trains: 5
        }
      }
    ],
    description: {
      __html: `
        <p>
          Mix up a little more shadow color here, then we can put us a little
          shadow right in there. See how you can move things around? You have
          unlimited power on this canvas – you can literally, literally move
          mountains
        </p>
      `
    }
  }
];

export default questions;
