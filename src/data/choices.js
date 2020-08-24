export default [
  {
    key: 'openNuclear',
    icon: 'coal',
    inputs: {
      capacity_of_energy_power_nuclear_gen3_uranium_oxide: 515
    }
  },
  {
    key: 'closeCoal',
    icon: 'coal',
    inputs: {
      capacity_of_energy_power_ultra_supercritical_coal: 0.0,
      capacity_of_energy_power_ultra_supercritical_cofiring_coal: 0.0,
      capacity_of_energy_chp_ultra_supercritical_coal: 0.0,
      capacity_of_energy_chp_ultra_supercritical_cofiring_coal: 0.0,
      capacity_of_energy_power_supercritical_coal: 0.0
    }
  },
  {
    key: 'buildOffshoreTurbines',
    icon: 'wind',
    inputs: {
      capacity_of_energy_power_wind_turbine_coastal: 5000
    }
  },
  {
    key: 'batteries',
    icon: 'battery',
    inputs: {
      households_flexibility_p2p_electricity_market_penetration: 25
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
    key: 'solarThermalParks',
    icon: 'house',
    inputs: {
      capacity_of_energy_heat_solar_thermal: 10000,
      households_heater_district_heating_steam_hot_water_share: 12.5,
      heat_storage_enabled: 1
    }
  },
  {
    key: 'hybridHeatPumps',
    icon: 'radiator',
    inputs: {
      households_heater_hybrid_heatpump_air_water_electricity_share: 100
    }
  },
  {
    key: 'travelByTrain',
    icon: 'train',
    inputs: {
      transport_passenger_trains_share: 17.4
    }
  },
  {
    key: 'electricVehicles',
    icon: 'electricVehicle',
    inputs: {
      transport_car_using_electricity_share: 100
    }
  },
  {
    key: 'electricTrucks',
    icon: 'truck',
    inputs: {
      transport_truck_using_electricity_share: 50
    }
  },
  {
    key: 'carPooling',
    icon: 'truck',
    inputs: {
      transport_vehicle_combustion_engine_efficiency: 2
    }
  },
  {
    key: 'heatPumps',
    icon: 'ship',
    inputs: {
      households_heater_heatpump_air_water_electricity_share: 100
    }
  },
  {
    key: 'travelByBikes',
    icon: 'car',
    inputs: {
      transport_bicycles_share: 16
    }
  },
  {
    key: 'beterInsulationOffices',
    icon: 'house',
    inputs: {
      buildings_insulation_level: 60
    }
  },
  {
    key: 'beterInsulationHomes',
    icon: 'house',
    inputs: {
      households_insulation_level_apartments: 40,
      households_insulation_level_corner_houses: 40,
      households_insulation_level_detached_houses: 40,
      households_insulation_level_semi_detached_houses: 40,
      households_insulation_level_terraced_houses: 40
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
    key: 'wasteHeatIndustry',
    icon: 'wrench',
    inputs: {
      households_heater_district_heating_steam_hot_water_share: 25.0,
      volume_of_imported_heat: 60,
      co2_emissions_of_imported_heat: 0
    }
  }
];
