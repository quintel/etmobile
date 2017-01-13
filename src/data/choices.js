export default [
  {
    key: 'closeModernCoal',
    icon: 'coal',
    inputs: {
      number_of_energy_power_ultra_supercritical_coal: 0.3
    }
  },
  {
    key: 'closeConventionalCoal',
    icon: 'coal',
    inputs: {
      number_of_energy_power_supercritical_coal: 0.5
    }
  },
  {
    key: 'buildOffshoreTurbines',
    icon: 'wind',
    inputs: {
      number_of_energy_power_wind_turbine_offshore: 321.3
    }
  },
  {
    key: 'batteries',
    icon: 'battery',
    inputs: {
      households_flexibility_p2p_electricity_market_penetration: 20
    }
  },
  {
    key: 'ledLightingHouseholds',
    icon: 'ledLighting',
    inputs: {
      households_lighting_led_electricity_share: 100
    }
  },
  {
    key: 'ledLightingOffices',
    icon: 'ledLighting',
    inputs: {
      buildings_lighting_led_electricity_share: 100
    }
  },
  {
    key: 'solarPanels',
    icon: 'solar',
    inputs: {
      households_solar_pv_solar_radiation_market_penetration: 100
    }
  },
  {
    key: 'replaceOldHouses',
    icon: 'house',
    inputs: {
      households_number_of_old_houses: 4.7,
      households_number_of_new_houses: 2.7
    }
  },
  {
    key: 'hybridHeatPumps',
    icon: 'radiator',
    inputs: {
      households_space_heater_hybrid_heatpump_air_water_electricity_share: 100
    }
  },
  {
    key: 'travelByTrain',
    icon: 'train',
    inputs: {
      transport_useful_demand_car_kms: -0.15
    }
  },
  {
    key: 'electricVehicles',
    icon: 'electricVehicle',
    inputs: {
      transport_car_using_electricity_share: 12.6
    }
  },
  {
    key: 'electricTrucks',
    icon: 'truck',
    inputs: {
      transport_truck_using_electricity_share: 20.0
    }
  },
  {
    key: 'lngTrucks',
    icon: 'truck',
    inputs: {
      transport_truck_using_lng_mix_share: 100
    }
  },
  {
    key: 'lngShips',
    icon: 'ship',
    inputs: {
      transport_ship_using_lng_mix_share: 100
    }
  },
  {
    key: 'fossilCarEfficiency',
    icon: 'car',
    inputs: {
      transport_car_using_diesel_mix_efficiency: 2
    }
  },
  {
    key: 'householdInsulationOld',
    icon: 'house',
    inputs: {
      households_insulation_level_old_houses: 1.0
    }
  },
  {
    key: 'householdInsulationNew',
    icon: 'house',
    inputs: {
      households_insulation_level_new_houses: 3.0
    }
  },
  {
    key: 'greenGas',
    icon: 'greenGas',
    inputs: {
      green_gas_total_share: 10
    }
  },
  {
    key: 'cheaperOil',
    icon: 'oil',
    inputs: {
      costs_oil: -50
    }
  },
  {
    key: 'refineryEfficiency',
    icon: 'wrench',
    inputs: {
      industry_useful_demand_for_chemical_refineries_electricity_efficiency: 1
    }
  }
];
