const inputs = [
  {
    code: 'number_of_energy_power_wind_turbine_offshore',
    name: 'Offshore wind turbines',
    image: 'wind_turbines.png',
    levels: [
      { name: 'Zero', value: 0 },
      { name: 'Low', value: 73.4, default: true },
      { name: 'Medium', value: 500 },
      { name: 'High', value: 1000 }
    ],
    description: {
      __html: `
        <p>
          Wind turbines produce renewable power without CO<sub>2</sub>
          emissions. Although wind does not run out, it does not always blow.
          This means that building windmills alone is not enough to ensure
          supply. You would have a problem if you needed power and there was no
          wind.
        </p>
      `
    }
  },
  {
    code: 'number_of_energy_power_combined_cycle_network_gas',
    name: 'Gas-fired power plants',
    image: 'gas_plants.png',
    levels: [
      { name: 'Zero', value: 0 },
      { name: 'Low', value: 10, default: true },
      { name: 'Medium', value: 20 },
      { name: 'High', value: 30 }
    ],
    description: {
      __html: `
        <p>
          A gas-fired power plant is cheaper to build than a coal power plant.
          However, power from gas costs more than power plants that burn coal. A
          gas-fired power plant is easily powered up or down. That can come in
          handy when there is no wind and solar panels do not produce
          electricity because the sun is not shining. CO2 emissions of a
          gas-fired power plant are half that of a coal-fired power plant.
        </p>
      `
    }
  },
  {
    code: 'transport_car_using_electricity_share',
    name: 'Electric cars',
    image: 'electric_cars.png',
    levels: [
      { name: 'Low', value: 14, default: true },
      { name: 'Medium', value: 50 },
      { name: 'High', value: 100 }
    ],
    description: {
      __html: `
        <p>
          An electric car uses about half the energy of a diesel or
          gasoline-powered car. Diesel and gasoline are made from oil. By
          switching to electric cars, we will save a lot of oil and at the same
          time use more electricity. Wind or solar powered cars will no longer
          produce any CO2 emissions. Electric cars powered by modern coal or
          gas-fired power plants will still emit less than conventional ones.
        </p>
      `
    }
  }
];

export default inputs;
