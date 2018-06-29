export default {
  batteries: {
    name: 'Thuisbatterijen',
    description: `
      Geef 20% van alle huishoudens een thuisbatterij die 19,8 kWh aan elektriciteit
      kan opslaan. Ter vergelijking: een gemiddeld huishouden gebruikt ongeveer 6 KWh elektriciteit per dag.
      Hiermee kunnen overschotten wind- en zonnestroom op een later tijdstip worden benut.
    `,
    why: `
      Helaas heeft het toevoegen van batterijen vanuit de bestaande situatie in Nederland
      nog geen zin voor de CO<sub>2</sub>-besparing. Als we de batterijen kunnen inzetten
      om wind- en zonnestroom op te slaan (die anders verloren zou zijn gegaan) hebben
      batterijen effect voor CO<sub>2</sub>-besparing.
    `
  },
  buildOffshoreTurbines: {
    name: 'Bouw 250 offshore windturbines',
    header: 'Wind op zee',
    description: `
      Bouw 250 windturbines met een capaciteit van 3 MWe. Windturbines produceren
      minder elektriciteit per MWe opgesteld vermogen dan fossiele centrales omdat het
      niet altijd waait. Windturbines op zee produceren ~40% van de tijd op vol vermogen.
      Samen genereren deze molens jaarlijks dus ca. 2.600 GWh; dat is voldoende elektriciteit voor 730.000 huishoudens.
    `,
    why: `
      Wind op zee heeft een grote impact op CO<sub>2</sub>-besparing, omdat zonder CO<sub>2</sub>-uitstoot elektricteit
      wordt geproduceerd. Het waait natuurlijk lang niet altijd. Daar moeten we rekening mee
      houden. Grappig genoeg is het straks dus verstandig om je telefoon op te laden als het buiten
      hard waait!
    `
  },
  closeConventionalCoal: {
    name: 'Sluit een conventionele kolencentrale',
    description: `
      Sluit een oude 800 megawatt (MWe) kolencentrale. Dit type centrale wordt
      niet meer gebouwd in welvarende landen, omdat ze teveel vervuilen.
    `,
    why: `
      Van alle fossiele elektriciteitscentrales stoten kolencentrales de meeste CO<sub>2</sub> uit.
      Oude centrales zijn minder efficiënt dan nieuwe en stoten daarom nog meer uit.
      Daarnaast vervuilen kolencentrales ook nog eens, doordat ze fijnstof uitstoten en
      kankerverwekkende PCA's. Nederland importeert zijn steenkool uit andere landen, voor-
      namelijk uit Colombia, waar de arbeidsomstandigheden te wensen overlaten.
    `
  },
  closeModernCoal: {
    name: 'Sluit een moderne kolencentrale',
    description: `
      Sluit een moderne 800 megawatt (MWe) kolencentrale. Dit is het meest
      gebruikelijke type kolencentrale in welvarende landen, die voldoet aan
      relatief strikte milieuregels.
    `,
    why: `
      Van alle fossiele elektriciteitscentrales stoten kolencentrales de meeste CO<sub>2</sub> uit.
      Daarnaast vervuilen kolencentrales ook nog eens, doordat ze fijnstof uitstoten en
      kankerverwekkende PCA's. Nederland importeert zijn steenkool uit andere landen, voor-
      namelijk uit Colombia, waar de omstandigheden ook niet goed zijn voor de mensen die
      daar wonen en werken.
    `
  },
  electricTrucks: {
    name: '20% meer elektrische vrachtwagens',
    header: '20% elektrische vrachtwagens',
    description: `
      In Nederland verbruiken vrachtwagens ongeveer evenveel energie als auto’s.
      Wat zijn de mogelijkheden voor elektrificatie van het vrachtvervoer?
    `,
    why: `
      Elektrische vrachtauto's hebben ook met de bestaande elektriciteitsmix (die toch
      voor het overgrote deel fossiel is) een positieve impact op de CO<sub>2</sub>-uitstoot. En als
      we in de toekomst overschakelen naar meer wind- en zonnestroom, wordt deze winst
      makkelijk vertienvoudigd! Het is op dit moment nog niet aantrekkelijk om elektrische
      vrachtwagens voor lang en zwaar transport te kopen.
    `
  },
  electricVehicles: {
    name: 'Een miljoen extra elektrische auto’s',
    header: 'Reis per elektrische auto',
    description: `
      Elektrische auto’s gebruiken maar de helft van de ‘well-to-wheel’ energie in
      vergelijking tot auto's op benzine of diesel.
      Ze veroorzaken ook geen directe uitstoot, dus zijn lekker schoon voor jouw stad of dorp!
    `,
    why: `
      Elektrische auto's hebben ook met de bestaande elektriciteitsmix (die toch
      voor het overgrote deel fossiel is) een positieve impact op de CO<sub>2</sub>-uitstoot. En als
      we in de toekomst overschakelen naar meer wind- en zonnestroom, wordt deze winst
      makkelijk vertienvoudigd!
    `
  },
  fossilCarEfficiency: {
    name: 'Maak fossiele auto’s efficiënter',
    header: 'Fossiele auto’s efficiënter',
    description: `
      Nieuwe auto’s worden elk jaar bijna 2% efficiënter. Om CO<sub>2</sub>-uitstoot te
      reduceren kun je dan ook beter in een efficiëntere nieuwe auto rijden.
    `,
    why: `
      Er zijn bijna acht miljoen auto's in Nederland! Deze stoten gezamenlijk heel veel CO<sub>2</sub> uit.
      Als deze auto’s zuiniger worden en daardoor minder benzine en diesel gebruiken, (), scheelt dat veel CO<sub>2</sub>-uitstoot!
    `
  },
  greenGas: {
    name: 'Maak 10% van het gas groen',
    header: '10% groengas',
    description: `
      Groengas is biogas dat opgewaardeerd is om bijmenging in het gasnet mogelijk te maken.
      Biogas kan worden gemaakt door vergisting of vergassing van biomassa.
    `,
    why: `
      De naam zegt het al: groengas is groen! Groengas wordt gemaakt van mest en/of plantaardig materiaal en
      telt dus niet mee voor onze CO<sub>2</sub>-uitstoot. Aangezien we in Nederland zeer veel gas
      gebruiken, heeft 10% een behoorlijke impact.
    `
  },
  householdInsulationNew: {
    name: 'Dubbele isolatie van nieuwe huizen',
    header: 'Isolatie nieuwe huizen',
    description: `
      Nieuwbouwhuizen – gebouwd na 1991 – zijn al beter geïsoleerd dan oudere huizen.
      In het algemeen hebben deze huizen dubbelglas en geïsoleerde spouwmuren, vloeren
      en daken. Wat levert het nog verder (maximaal) isoleren van deze huizen op?
    `,
    why: `
      Nieuwe huizen gebruiken al relatief weinig energie, dus nog meer besparen heeft hier niet zo veel zin.
      Oude slecht geïsoleerde huizen gebruiken veruit de meeste energie. Daar lekt de energie echt
      weg!
    `
  },
  householdInsulationOld: {
    name: 'Dubbele isolatie van oude huizen',
    header: 'Isolatie oude huizen',
    description: `
      De belangrijkste isolatiemaatregelen zijn dak-, muur-, vloerisolatie,
      en dubbelglas. Met dit viertal kan 75% van de potentiële
      besparingen worden gerealiseerd. Wat zou het betekenen als we de gemiddelde isolatiegraad
      van huizen van vóór 1991 konden verdubbelen?
    `,
    why: `
      Oude huizen gebruiken relatief heel veel energie doordat ze zo slecht geïsoleerd zijn. Als je de
      verwarming aanzet, verdwijnt de meeste warmte door de ramen, kieren en muren naar
      buiten. Als we deze weggegooide energie kunnen tegenhouden, besparen we veel
      energie en daarmee CO<sub>2</sub>-uitstoot.
    `
  },
  hybridHeatPumps: {
    name: 'Hybride warmtepompen',
    description: `
      Deze verwarmingsoptie is een combinatie van een kleine elektrische warmtepomp
      en een hoogrendementsketel op gas. Wat als elk huis met deze technologie zou worden verwarmd?
    `,
    why: `
      Het mooie van deze technologie is dat we onze bestaande huizen de meeste dagen goed
      kunnen verwarmen met de warmtepomp. We pompen hiermee namelijk gratis energie van buiten
      naar binnen. Dit is duurzaam en relatief goedkoop. Maar als het buiten echt heel koud is, dan kan
      dit niet meer zo makkelijk. Dan kan dit slimme apparaat overschakelen op (groen) gas en er alsnog
      voor zorgen dat het binnen aangenaam warm wordt.
    `
  },
  ledLightingHouseholds: {
    name: 'Gebruik van LED-lampen',
    description: `
      Vervang alle lampen door moderne ultrazuinige LED-lampen in woningen.
      Ouderwetse gloeilampen hebben gemiddeld 1000 branduren, maar LED-lampen kunnen wel 50.000 uur mee gaan.
      Daarnaast zijn ze ook nog eens 6 keer efficiënter!
    `,
    why: `
      Natuurlijk willen we alleen nog maar zuinige verlichting, want je kan hiermee makkelijk energie en
      geld besparen. Maar, misschien valt dit getal een beetje tegen? Dat horen we vaker. We
      besteden gewoon niet zoveel energie aan verlichting van woningen.
      Verwarming en autorijden, dat kost veel meer energie.
    `
  },
  ledLightingOffices: {
    name: 'Gebruik van LED-lampen in kantoren',
    description: `
      Vervang alle lampen door LED-lampen in kantoren en andere gebouwen waar niet in gewoond wordt.
      LED-lampen zijn 6 keer zo efficiënt als gloeilampen en gaan ook nog eens veel langer mee.
    `,
    why: `
      Natuurlijk willen we alleen nog maar zuinige verlichting, want je kunt hiermee makkelijk energie en
      geld besparen. Maar, misschien valt dit getal een beetje tegen? Dat horen we wel vaker. We
      besteden gewoon niet zoveel energie aan verlichting. Verwarming en autorijden, dat kost veel meer
      energie. Dit getal is wel hoger dan de besparing in de huishoudens, doordat kantoren, scholen en
      ziekenhuizen nu eenmaal meer lampen hebben en ze ook nog eens veel langer branden.
    `
  },
  lngShips: {
    name: 'Alleen nog LNG-schepen',
    header: 'Schepen op LNG',
    description: `
      Vervang diesel door vloeibaar aardgas (LNG) voor scheepvaart.
      In vergelijking met dieselschepen stoten schepen die op LNG
      varen 50% minder zwavel en 60% minder fijnstof uit.
    `,
    why: `
      Het verschil in CO<sub>2</sub>-uitstoot is niet zo heel groot.
      Dat komt doordat LNG ook een fossiele brandstof is. Het is wel veel schoner voor wat betreft
      uitstoot van zwaveldioxide en fijnstof, dus voor de luchtkwaliteit wel veel beter dan diesel.
    `
  },
  lngTrucks: {
    name: 'Alleen nog LNG-vrachtwagens',
    header: 'Vrachtwagens op LNG',
    description: `
      Vervang diesel door vloeibaar aardgas (LNG) voor vrachtvervoer over de weg.
      Deze brandstof reduceert de CO<sub>2</sub> per km met 30% en stoot ook minder fijnstof uit.
    `,
    why: `
      Omdat we hiermee 30% CO<sub>2</sub>-uitstoot per kilometer besparen en een groot deel
      van het transport door vrachtwagens wordt verzorgd, is deze vervanging een goed idee.
    `
  },
  refineryEfficiency: {
    name: '1% efficiëntie-toename per jaar voor raffinaderijen',
    header: 'Efficiëntere raffinaderijen',
    description: `
      Raffinaderijen gebruiken veel energie om olie om te zetten in olieproducten.
      Wat gebeurt er als we deze installaties de komende 33 jaar elk jaar 1% efficiënter maken?
    `,
    why: `
      In Nederland staan veel raffinaderijen, maar die produceren ook benzine en
      diesel voor het buitenland. Dus dit helpt niet veel voor de CO<sub>2</sub>-uitstoot van ons
      land.
    `
  },
  replaceOldHouses: {
    name: 'Oude door nieuwe huizen vervangen',
    description: `
      Vervang een miljoen oude huizen door nieuwe, energiezuinigere huizen.
    `,
    why: `
      We hebben in Nederland zeven en een half miljoen woningen. Een flink deel hiervan vervangen door nieuwe, scheelt veel CO<sub>2</sub>-uitstoot.

    `
  },
  solarPanels: {
    name: 'Zonnepanelen op huizen',
    description: `
      Met een zonnepaneel op je dak ben je niet alleen consument maar ook producent van stroom.
      Wat gebeurt als we <strong>alle</strong> huizen met zonnepanelen zouden bedekken?
    `,
    why: `
      Dit is een flinke besparing. We zullen waarschijnlijk wel het elektriciteitsnetwerk
      bij je in de buurt een keertje moeten upgraden, maar we kunnen heel veel CO<sub>2</sub>-uitstoot
      besparen als we dit doen. Je kan zelfs met een modern huis vol met zonnepanelen nu al net
      zoveel energie opwekken als je gebruikt. Dat noemen we 'Nul op de meter'.
    `
  },
  travelByTrain: {
    name: 'vijf procentvan de autoritten per trein',
    header: 'Reizen per trein',
    description: `
      Autovervoer kost veel energie. Wat gebeurt als we mensen kunnen overhalen om vijf procent
      (meer) van hun personenvervoer met de trein te doen? Dit bespaart energie,
      CO<sub>2</sub>-uitstoot,kosten én scheelt files.
    `,
    why: `
      dit bespaart een half procent. Dat lijkt weinig maar is eigenlijk veel als we bedenken
      dat maar één op de twintig mensen zijn of haar auto zou moeten verruilen voor de trein?
      Voor een elektrisch vervoermiddel dus, met gratis chauffeur.
    `
  }
};




