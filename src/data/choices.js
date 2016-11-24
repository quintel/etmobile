export default [
  {
    name: 'Build a coal plant',
    header: 'A coal power plant',
    icon: 'coal',
    description: `
      You can build a 800 megawatt electric (MWe) ultra-supercritical
      pulverized coal-fired plant. Of all types of power plants, coal and
      lignite-fired ones contribute most to pollution of the environment. This
      is the most common type of modern coal-fired power plant in rich
      countries with relatively strict regulations for air pollution.
    `,
    inputs: {
      number_of_energy_power_combined_cycle_coal: 1.0
    }
  },
  {
    name: 'Build a gas plant',
    header: 'A gas power plant',
    icon: 'gas',
    description: `
      You will build a(n additional) Combined Cycle Gas Turbine (CCGT) power
      plant with an output capacity of 800 MW. Flexible gas-fired plants are
      often used for meeting daily electricity demand peaks and therefore
      produce less electricity per year than coal-fired plants of the same
      production capacity.
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
      You can build 250 wind turbines of 3 MWe each. Wind turbines produce
      less electricity per MWe than fossil-fired or nuclear plants do because
      of varying wind conditions. Offshore wind turbines produce at maximum
      capacity ~40% of the time, if there is not too much need for maintenance.
    `,
    inputs: {
      number_of_energy_power_wind_turbine_offshore: 321.3
    }
  },
  {
    name: 'Store electricity in batteries',
    icon: 'battery',
    description: `
      You can give an additional 20% of all households a battery that can store
      19.8 kWh of electricity and can be charged using grid power or solar.
    `,
    inputs: {
      households_flexibility_p2p_electricity_market_penetration: 20
    }
  },
  {
    name: 'Use LED light bulbs',
    icon: 'ledLighting',
    description: `
      Replace all the light bulbs in households with LED-lights. A old-fashioned
      incandescent light bulb lasts for 1,000 hours, but LED-lights last for
      50.000 hours! So, less changing as well.
    `,
    inputs: {
      households_lighting_led_electricity_share: 100
    }
  },
  {
    name: 'Use LED light bulbs in offices',
    icon: 'ledLighting',
    description: `
      You can turn 100% of the lights at offices into LED lights. These lights
      also need to be replaced a lot less that the old fashioned light bulbs,
      so you will also save costs!
    `,
    inputs: {
      buildings_lighting_led_electricity_share: 100
    }
  },
  {
    name: 'Install solar PV panels',
    icon: 'solar',
    description: `
      With a solar panel on your roof, you will turn yourself from a mere
      energy consumer into a producer.
    `,
    inputs: {
      households_solar_pv_solar_radiation_market_penetration: 100
    }
  },
  {
    name: 'Replace old with new houses',
    icon: 'house',
    description: `
      One million old houses will be replaced with newly build houses. Newly
      build houses have much more stricter regulations with regards to
      insulation.
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
      This heater is a combination of an electric heat pump that draws its heat
      from the outside air and an efficient conventional gas-fired boiler.
      Essentially, the hybrid heat pump offers a way to strongly reduce
      natural gas demand for heating, while buying time for grid management
      companies to reinforce grids.
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
      People spent a lot of energy driving around in cars. What if we managed
      to convice 5% to use the train in stead of a car, it will save energy,
      CO2-emissions, costs and shorten traffic jams!
    `,
    inputs: {
      transport_useful_demand_car_kms: -0.15
    }
  },
  {
    name: 'Add one million electric cars',
    header: 'Travel by electric car',
    icon: 'electricVehicle',
    description: `
      These cars use less than half the energy from 'well to wheels' of good
      diesel cars and are even more efficient compared to gasoline engines.
      They are emission free, which is bonus to the environment in our city
      and villages!
    `,
    inputs: {
      transport_car_using_electricity_share: 12.6
    }
  },
  {
    name: 'Increase electric trucks with 20%',
    header: '20% electric trucks',
    icon: 'truck',
    description: `
      Trucks need to drive longer distances, and sometimes have less time to
      stop and recharge. Siemens is testing electric trucks that can be
      charges while driving on the highway with a catenary.
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
      You can replace diesel trucks with electric trucks. But you may also
      want to replace part of the fleet with liquified natural gas(LNG).
      This fuel emmits about 30% less CO<sub>2</sub> per km.
    `,
    inputs: {
      transport_truck_using_lng_mix_share: 20
    }
  },
  {
    name: 'Increase LNG ships with 20%',
    header: 'LNG ships',
    icon: 'ship',
    description: `
      Compared to diesel ships, an LNG ship has a 50% advantage in its emissions
      of sulfur particles and a 60% advantage in particulate matter. Because of
      methane slip at the ships engine, the CO2 difference is very small.
    `,
    inputs: {
      transport_ship_using_lng_mix_share: 20
    }
  },
  {
    name: 'Make fossil cars more efficient',
    header: 'Fossil cars more efficient',
    icon: 'car',
    description: `
      New cars become almost 2% more efficient every year. So, for
      CO<sub>2</sub> emissions, it is vital that people replace their
      old puffing machines with shiny new ones!
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
      The most important insulation measures are roof, wall, floor insulation
      and insulated glazing. These four account for roughly 75% of the total
      potential savings. What if we can double the average insulation level
      of all houses build before 1990?
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
      Newly build houses, namely those build after 1990, already have a higher
      degree of insulation. In general, they have been built with cavity walls
      containing insulation, insulated glazing, roofs and floors. What if we
      insulate these houses further to their maximum potential?
    `,
    inputs: {
      households_insulation_level_new_houses: 3.0
    }
  },
  {
    name: 'Make 10% of gas green',
    header: '10% green gas',
    icon: 'greenGas',
    description: `
      This increases the percentage of all gas used as green gas with 10%.
      Green gas is biogas that has been upgraded to natural gas quality. It
      can be fed into the gas mains. Biogas is conventionally produced by
      bacteria that digest biological material. In the future, such gas may be
      produced by 'gasification' of biomass.
    `,
    inputs: {
      green_gas_total_share: 10,
    }
  },
  {
    name: 'make oil cheap',
    header: 'cheaper oil',
    icon: 'oil',
    description: `
      The price of oil is tracked by many and discussed on a daily basis in
      the news. Does it have an impact of the CO<sub>2</sub> emissions of our
      energy system?
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
      Refineries use a lot of energy breaking down crude oil into oil products.
      In the past decades, these plants have become a lot more efficient. What
      if we keep making them 1% per year more efficient?
    `,
    inputs: {
      industry_useful_demand_for_chemical_refineries_electricity_efficiency: 1
    }
  }
];
