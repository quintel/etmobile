const questions = [
  {
    code: 'coal_or_wind',
    name: 'Coal or wind?',
    inputs: [
      'number_of_energy_power_combined_cycle_coal',
      'number_of_energy_power_wind_turbine_offshore'
    ],
    choices: [
      {
        name: 'Build 3 coal plants',
        icon: 'coal',
        values: [3.0, 73.4]
      },
      {
        name: 'Build 800 offshore turbines',
        icon: 'wind',
        isCorrect: true,
        values: [0.31, 871.3]
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
  }
];

export default questions;
