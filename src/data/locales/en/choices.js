export default {
  batteries: {
    name: 'Home battery',
    description: `
      Provide 25% of all households with a home battery with a storage capacity of 19.8 kWh 
      electricity. In comparison: an average household uses about 6-8 KWh of electricity 
      per day. This allows for surplus wind and solar power to be used at a later time.
    `,
    why: `
      Unfortunately, to decrease CO<sub>2</sub> adding batteries does not make sense regarding 
      the present situation in the Netherlands. However, if we use the batteries to store wind 
      and solar power (which would otherwise have been lost), batteries can have a positive 
      effect on CO<sub>2</sub> emissions.
    `
  },
  buildOffshoreTurbines: {
    name: 'Built 500 offshore wind turbines',
    header: 'Wind at sea',
    description: `
      Bouw 500 windturbines met een capaciteit van 10 MW, met een hoogte van bijna 200 meter.
      Deze windturbines staan op de Noordzee en produceren enkel waneer het hard genoeg waait.
    `,
    why: `
      Offshore wind has a major impact on CO<sub>2</sub> emissions since electricity is 
      produced without CO<sub>2</sub> emissions. However, wind is not always available. Still, 
      offshore wind turbines still produce ~40% -50% of the time at full power. Together these 
      turbines generate approximately 19,700 GWh annually; that is enough electricity for 5.8 
      million households! It is just not always windy. Funnily enough, it will soon be wise to charge 
      your phone when wind is blasting, or the sun is shining.
    `
  },
  closeCoal: {
    name: 'Close all coal power plants',
    description: `
      Shutting down all coal-fired power stations in the Netherlands without changing electricity 
      demand means that our electricity has to be produced elsewhere. In this case we assume 
      that gas-fired power stations will fill the gap in power production.
    `,
    why: `
      Of fossil power plants, coal-fired power plants emit most of the CO<sub>2</sub>. Replacing 
      the production of coal to fossil gas thus saves a lot of CO<sub>2</sub>.
    `
  },
  openNuclear: {
    name: 'Open a new coal power plant',
    description: `
      Open a new nuclear power plant with the same size as the Borssele power station (515 MWe). 
      Nuclear power plants come in many different sizes. Borssele is certainly not the largest. 
      Japan has the largest nuclear power plant which is 16x bigger than Borssele.
    `,
    why: `
      Nuclear power plants do not emit CO<sub>2</sub> during the production of electricity. 
      Following this reasoning, it fits well in a climate-neutral energy system. 
      However, there are heated discussions about the resulting radioactive waste, 
      the impact of possible hazards and the high investment costs. 
      We are also not certain if wind and nuclear energy work well in the same system. 
      Switching nuclear power plants on and off to absorb the wind peaks is not ideal.
    `
  },
  electricTrucks: {
    name: '50% of trucks become electric',
    header: 'Electric trucks',
    description: `
      In the Netherlands, trucks and cars consume around the same amount of energy. 
      What are the possibilities for the electrification of freight transport?
    `,
    why: `
      Electric trucks do not have an immediate positive impact on CO<sub>2</sub>emissions, 
      even with the current electricity mix (which is largely based on fossil fuels). 
      However, since we are switching to more wind and solar power, the climate gains will become much greater! 
      At the moment it is not attractive to buy electric trucks for long and heavy transport, but in cities they are increasingly visible. 
    `
  },
  electricVehicles: {
    name: 'Every car electric',
    header: 'Travel with electric car',
    description: `
      Electric cars only use half of the well-to-wheel energy compared to petrol or diesel cars. 
      On top of this they do not cause direct emissions and are therefore clean for your town or village!
    `,
    why: `
      Electric cars have a positive impact on CO<sub>2</sub> emissions even when taking the 
      existing electricity mix (which is largely fossil) into account. 
      If we switch to more wind and solar power in the future, the decrease in emissions will become much higher!
    `
  },
  travelByBikes: {
    name: 'Bike twice as much',
    header: 'Bike twice as much',
    description: `
      Besides walking, cycling is perhaps the most climate-friendly way to get around. 
      The Dutch cycle almost 1000 kilometers a year. What if we cycled twice as much and used our car less?
    `,
    why: `
      Cycling, instead traveling by car, definitely has an impact. On the climate, on your health and on overall traffic. 
      With only a few extra bike rides we will not reach our transition goals, however, it does contribute. 
    `
  },
  greenGas: {
    name: 'Make 10% of the gas green',
    header: '10% green gas',
    description: `
      It is all in the name: green gas is green! Green gas can be made from manure and/or plant material. 
      Furthermore, it has exactly the same composition as the current fossil gas: it is methane.     
    `,
    why: `
      Currently we use a considerable amount of gas in the Netherlands and therefore 10% has a significant impact. 
      However, there is not enough green gas to replace the current fossil gas demand.
    `
  },
  beterInsulationHomes: {
    name: 'Better insulation for homes',
    header: 'Insulation for homes',
    description: `
      Insulation of households ensures that heat stays indoors in winter and outdoors in summer. 
      For insulation, think of double or triple glass, roof insulation, floor insulation or better insulation in general.
    `,
    why: `
      Many homes, especially historic ones, can use extra insulation. 
      There is a considerable amount of profit that can be made here, both economically and climate wise. 
      Think about what could improve in your home. Any idea?
    `
  },
  beterInsulationOffices: {
    name: 'Better insulated schools and offices',
    header: 'Insulation offices',
    description: `
      The main insulation measures are roof, wall or floor insulation and double glazing. 
      With these four, 75% of potential savings can be achieved. 
      What would it mean if we were to improve insulation in all of these buildings?
    `,
    why: `
      Offices, but also schools and hospitals, use a considerable amount of energy for heating and cooling. 
      When you turn on heating, much of the heat disappears through windows, cracks and outer walls. 
      If we can stop discarding this energy, we will save a lot and thus decrease CO<sub>2</sub> emissions.
    `
  },
  hybridHeatPumps: {
    name: 'All dwellings use hybrid heat pumps',
    header: 'Homes on hybrid heat pumps',
    description: `
      This heating option is a combination of a small electric heat pump and a typical gas boiler. 
      What if every house is heated using this technology?
    `,
    why: `
      The beauty of this technology is that existing houses can be heated most days using the heat pump. 
      We use free energy abstracted from the environment. This is a sustainable and relatively cheap method. 
      However, this is not as effective if it is really cold outside. 
      In this case, the device is still able to provide enough heat by switching to (green) gas.
    `
  },
  ledLightingHouseholds: {
    name: 'Using LED-lighting in homes',
    description: `
      Replace all lighting in homes with modern, ultra-efficient LED bulbs.
      Old-fashioned bulbs function 1,000 hours on average, but LED bulbs can last up to 50,000 hours. 
      In addition, they are also 6 times more efficient!      
    `,
    why: `
    Of course, everyone wants more efficient lighting since it can easily save energy and money. 
    However, this number might be a little disappointing. We hear this a lot. 
    We do not spend a lot of energy on lighting our homes. Heating and driving, that is the real deal.    
    `
  },
  ledLightingOffices: {
    name: 'Using LED-lighting in offices',
    description: `
      Replace all lighting with LED bulbs in offices and other buildings that are not used for living. 
      LED bulbs are 6 times more efficient compared to old-fashioned bulbs and last much longer.
    `,
    why: `
      Of course, everyone wants more efficient lighting since it can easily save energy and money. 
      However, this number might be a little disappointing. We hear this a lot. 
      We do not spend a lot of energy on lighting our homes. Heating and driving, that is the real deal. 
      This figure is higher compared to CO<sub>2</sub> savings in households as offices, 
      schools and hospitals use more lighting and for a much longer time period during the day.
    `
  },
  heatPumps: {
    name: 'All dwellings use a heat pump',
    header: 'Homes on heat pump',
    description: `
      This heating option uses an electric heat pump. A heat pump is actually an inverted fridge. 
      With electricity, air is compressed and resulting in an increase in volume and temperature. 
      The reverse effect can also be seen with aerosol deodorant. 
      This cools down when spraying because the volume of the air outside the bottle increases.
    `,
    why: `
      When all homes start using a heat pump it definitely has an effect. However, not all dwellings are suitable for a heat pump.
      First, a house must be insulated to at least label A or B. Sadly this is not possible for all homes in an affordable way.
      On top of this we need to produce more sustainable electricity in the Netherlands for a larger decrease in CO<sub>2</sub>-emissions.
    `
  },
  carPooling: {
    name: 'Carpooling',
    header: 'Carpooling',
    description: `
      Carpooling means that you use a car with several people compared to when you use your car alone. 
      This saves space on the road as well as energy. 
      On average, the occupancy rate per driven kilometer is 1.43 people per car. What if we doubled this?
    `,
    why: `
      The effect of car sharing by doubling occupants from 1.4 to 2.8 results in 43% energy savings for cars. This is a huge difference. 
      Driving together is therefore cozier as well as more sustainable! 
      It is not 50% due to the fact that you often have to drive a little longer. 
      It costs about 10% more fuel per ride for the detour and 3% more for the extra weight.
    `
  },
  wasteHeatIndustry: {
    name: 'Using industrial residual heat to heat homes ',
    header: 'Residual heat grid',
    description: `
      In some cases, industry and data centers have surplus heat which they can no longer use within their process. 
      What if 25% of houses are fed with industrial residual heat?
    `,
    why: `
      Industry is a large sector in the Netherlands. It is also transitioning to a CO<sub>2</sub>-free production. 
      Still, industry can produce residual heat which is of no further use to them.
      It would be a nice and impactful solution to use this residual heat effectively.
      Heating homes in densely built-up inner cities is therefore a good option.
    `
  },
  solarThermalParks: {
    name: 'Solar thermal field',
    description: `
      Solar thermal fields are solar panels that produce heat. 
      They use heat from the sun and store it in water for later use. It is similar to a leather car seat which is heated by the sun.
    `,
    why: `
      Solar thermal fields can contribute to our hot water demand for showers, for example. 
      In addition, it is also possible to supply heat to heat grids and households further down the pipe. 
      A disadvantage is that the heat production takes place mainly in the summer and the demand is at its highest in the winter. 
      However, with storage this can be largely solved.
  `
  },
  solarPanels: {
    name: 'Solar panels on households',
    description: `
      With a solar panel on your roof, you are not only a consumer but also become a producer of electricity. 
      What happens if we covered all suitable roofs of homes with solar panels?
    `,
    why: `
    This leads to a considerable saving. 
    The power grid near you probably has to be increased once, but we can save a lot of CO<sub>2</sub> emissions if we do this. 
    Even a modern home with a roof full of solar panels can already generate the same amount of electricity compared to the electricity used. 
    If we can do that it means your home will zero on the meter. Affordable electricity storage is however still a problem.
    `
  },
  travelByTrain: {
    name: 'Doubling train rides',
    header: 'Travelling by train',
    description: `
      Car transport is very energy intensive. 
      What happens if we can persuade people to take the train resulting in double the amount of train passengers? 
      It saves both CO<sub>2</sub>emissions, energy and traffic jams.
    `,
    why: `
      Rail travel certainly decreases CO<sub>2</sub> emissions. However, only train travel is not enough to meet climate targets. 
      In addition, there are more and more CO<sub>2</sub>-neutral options, such as electric driving. 
      Nevertheless, the train remains a fast and convenient means of transport, sort of electric carpooling. 
      `
  }
};
