export default {
  batteries: {
    name: 'Geef 25% van de woningen een thuisbatterij',
    description: `
    Geef 25% van alle huishoudens een thuisbatterij die ongeveer 20 kWh aan elektriciteit kan opslaan.
    Ter vergelijking: een gemiddeld huishouden gebruikt ongeveer 6-8 kWh elektriciteit per dag.
    Hiermee kunnen overschotten aan wind- en zonnestroom op een later tijdstip worden benut.
    `,
    why: `
    Helaas heeft het toevoegen van batterijen vanuit de bestaande situatie in Nederland nog geen zin voor wat betreft CO<sub>2</sub>-besparing.
    Pas als we de batterijen kunnen inzetten om wind- en zonnestroom op te slaan die anders verloren
    zou zijn gegaan, hebben batterijen effect op de CO<sub>2</sub>-uitstoot.
    `
  },
  buildOffshoreTurbines: {
    name: 'Bouw 500 offshore windturbines',
    header: 'Wind op zee',
    description: `
      Bouw 500 windturbines met een capaciteit van 10 MWe.
      Deze windturbines staan op de Noordzee en produceren enkel voldoende elektriciteit wanneer het hard genoeg waait.
    `,
    why: `
      Wind op zee heeft een grote impact op de CO<sub>2</sub>-emissies, omdat CO<sub>2</sub>-vrije elektriciteit wordt geproduceerd,
      ook al waait het natuurlijk lang niet altijd, toch produceren windturbines op zee ~40%-50% van de tijd op vol vermogen.
      Samen genereren deze molens jaarlijks ca. 19.700 GWh; dat is voldoende elektriciteit voor 5,8 miljoen huishoudens!
      We moeten er dan wel rekening mee houden dat het niet altijd waait. Grappig genoeg is het straks dus verstandig om bijvoorbeeld
      je auto op te laden als het buiten hard waait of de zon schijnt!
    `
  },
  closeCoal: {
    name: 'Sluit alle kolencentrales',
    description: `
      Het sluiten van alle kolencentrales in Nederland zonder dat de elektriciteitsvraag verandert,
      veroorzaakt dat onze stroom ergens anders vandaan moet komen.
      In dit geval gaan wij ervanuit dat gascentrales de weggevallen stroomproductie op zich nemen.
    `,
    why: `
      Van fossiele elektriciteitscentrales stoten kolencentrales de meeste CO<sub>2</sub> uit.
      Vervanging van kolen door fossiel gas bespaart dus al fors CO<sub>2</sub>.
    `
  },
  openNuclear: {
    name: 'Open een nieuwe kerncentrale',
    description: `
     Open een nieuwe kerncentrale van het huidige formaat als in Borsele (515 MWe). Kerncentrales zijn er in alle maten.
     Borsele is zeker niet de grootste.
     In Japan staat de allergrootste kerncentrale ter wereld; die 16x groter is dan in Borsele.
    `,
    why: `
      Kerncentrales stoten geen CO<sub>2</sub> uit bij de productie van elektriciteit.
      Wat dat betreft passen zij goed in een klimaatneutraal energiesysteem.
      Wel is er veel discussie over het radioactieve afval, de impact als het toch fout gaat en de hoge investeringskosten.
      Ook is het de vraag of kernenergie een geschikte aanvulling is op wind- en zonnestroom.
      Een kerncentrale zet je liever niet uit en aan, dus ook niet om windpieken en windstiltes op te vangen.
    `
  },
  electricTrucks: {
    name: '50% van de vrachtwagens elektrisch',
    header: 'Elektrische vrachtwagens',
    description: `
      In Nederland gebruiken vrachtwagens ongeveer evenveel energie als auto’s.
      Wat zijn de mogelijkheden voor elektrificatie van het vrachtvervoer?
    `,
    why: `
      Elektrische vrachtauto’s hebben ook met de bestaande elektriciteitsmix
      (die toch voor het overgrote deel fossiel is) een positieve impact op de CO<sub>2</sub>-uitstoot.
      En als we in de toekomst overschakelen naar meer wind- en zonnestroom, wordt deze winst makkelijk vertienvoudigd!
      Het is op dit moment vaak nog niet aantrekkelijk om elektrische vrachtwagens voor lang en zwaar transport te kopen.
      In de steden zie je wel veel meer licht elektrisch vrachtvervoer. Hoeveel spot jij er op een dag?
    `
  },
  electricVehicles: {
    name: 'Elke auto elektrisch',
    header: 'Reis per elektrische auto',
    description: `
      Elektrische auto’s gebruiken van energiebron tot werking maar circa de helft van de energie die auto’s op benzine of diesel nodig hebben.
      Ze veroorzaken op de plaatsen waar ze rijden ook geen directe uitstoot, dus zijn schoon voor jouw stad of dorp!
    `,
    why: `
      Elektrische auto’s verminderen ook met de bestaande elektriciteitsmix (die toch voor het overgrote deel fossiel is) de CO<sub>2</sub>-uitstoot.
      En als we in de toekomst overschakelen naar meer wind- en zonnestroom, wordt deze klimaatwinst veel hoger!
    `
  },
  travelByBikes: {
    name: 'Twee keer meer fietsen',
    header: 'Twee keer meer fietsen',
    description: `
      Fietsen is naast lopen de klimaatvriendelijkste manier om je te verplaatsen.
      Nederlanders fietsen jaarlijks bijna 1000 kilometer. Toch kiezen veel Nederlanders ook op korte afstanden vaak voor de auto.
      Volgens het CBS is een kwart van de autoritten onder de 5 km.
      Deze maatregel gaat er van uit dan wij niet 7.7% van alle kilometers op de fiets afleggen, maar ca. 15%. Twee keer zoveel fietsen dus.
    `,
    why: `
      Fietsen in plaats van autorijden heeft zeker impact, zowel op het klimaat als op jouw gezondheid.
      Ook neemt een fiets veel minder ruimte in dan een auto.
      Met alleen wat meer fietsen gaat de transitie niet lukken, maar het draagt wel een steentje bij.
    `
  },
  greenGas: {
    name: 'Maak 10% van het gas groen',
    header: '10% groengas',
    description: `
      De naam zegt het al: groengas is groen! Groengas kan onder andere worden gemaakt uit mest en/of plantaardige grondstoffen.
      Verder is het precies gelijk aan het (fossiele) aardgas. Het is namelijk methaan.
    `,
    why: `
      Aangezien we in Nederland nu zeer veel gas gebruiken, heeft het verhogen van het percentage groengas tot 10%
      van het totaal een behoorlijke impact. Er zal echter niet voldoende groengas zijn om al het huidige fossiele gas te kunnen vervangen.
    `
  },
  beterInsulationHomes: {
    name: 'Beter geïsoleerde huizen',
    header: 'Isolatie huizen',
    description: `
      Isolatie van woningen zorgt ervoor dat in de winter de warmte binnen blijft en in de zomer buiten.
      Denk bij isolatie aan dubbel of drielaags glas, dakisolatie, vloerisolatie of de muren beter isoleren.

    `,
    why: `
      Heel veel woningen, met name oudere woningen, kunnen veel beter geïsoleerd worden. Er is hier nog veel winst te behalen,
      zowel voor de portemonnee als voor het klimaat. Denk eens na wat er beter zou kunnen in jouw huis. Zou jij het weten?
    `
  },
  beterInsulationOffices: {
    name: 'Beter geïsoleerde scholen en kantoren',
    header: 'Isolatie gebouwen',
    description: `
      De belangrijkste isolatiemaatregelen zijn dak-, muur-, vloerisolatie en plaatsing van dubbelglas.
      Met dit viertal kan 75% van de potentiële besparingen worden gerealiseerd.
      Wat zou het betekenen als wij al deze gebouwen veel beter zouden isoleren?
    `,
    why: `
      Kantoren maar ook scholen en ziekenhuizen gebruiken veel energie voor het verwarmen en koelen.
      Als je de verwarming aanzet, verdwijnt veel warmte door de ramen, kieren en muren naar buiten.
      Als we deze energie kunnen tegenhouden in plaats van weggooien, besparen we veel energie en daarmee CO<sub>2</sub>-uitstoot.
    `
  },
  hybridHeatPumps: {
    name: 'Alle woningen op hybride warmtepompen',
    header: 'Woningen een hybride-warmtepomp',
    description: `
      Dit verwarmingsapparaat is een combinatie van een kleine elektrische warmtepomp en een HR-ketel op gas.
      Wat als elk huis met deze technologie zou worden verwarmd?
    `,
    why: `
      Het mooie van deze technologie is dat we onze bestaande huizen de meeste dagen goed kunnen verwarmen met de warmtepomp.
      We pompen hiermee namelijk gratis energie van buiten naar binnen. Dit is duurzaam en relatief goedkoop.
      Maar als het buiten echt koud is, dan levert een warmtepomp voor oudere huizen onvoldoende warmte
      en kan dit slimme apparaat overschakelen op (groen) gas en er alsnog voor zorgen dat het binnen aangenaam warm wordt.
    `
  },
  ledLightingHouseholds: {
    name: 'Gebruik van LED-lampen in woningen',
    description: `
      Vervang in woningen alle nog aanwezige gloei- en halogeenlampen  door moderne ultrazuinige LED-lampen.
      Ouderwetse gloeilampen hebben gemiddeld 1000 branduren, maar LED-lampen kunnen wel 50.000 uur mee gaan.
      Daarnaast zijn ze ook nog eens zes keer efficiënter!
    `,
    why: `
      Natuurlijk willen we alleen nog maar zuinige verlichting, want je kan hiermee makkelijk energie en geld besparen.
      Maar, misschien valt dit getal een beetje tegen? Dat horen we vaker.
      We besteden gewoon niet zoveel energie aan verlichting van woningen.
      Ons huis verwarmen en autorijden, dat kost veel meer energie.
    `
  },
  ledLightingOffices: {
    name: 'Gebruik van LED-lampen in kantoren',
    description: `
      Vervang alle nog aanwezige gloei-, en halogeenlampen door LED-lampen in kantoren, scholen, ziekenhuizen
      en alle andere gebouwen die geen woningen zijn.
      LED-lampen zijn zes keer zo efficiënt als gloeilampen en gaan ook nog eens veel langer mee.
    `,
    why: `
      Natuurlijk willen we alleen nog maar zuinige verlichting, want je kunt hiermee makkelijk energie en geld besparen.
      Misschien valt het effect een beetje tegen? Dat horen we wel vaker.
      We besteden gewoon niet zoveel energie aan verlichting. Verwarming en autorijden,
      dat kost veel meer energie. Dit getal is wel hoger dan de besparing in de huishoudens,
      doordat in kantoren, scholen en ziekenhuizen nu eenmaal meer lampen zijn en ze ook nog eens veel langer branden.
    `
  },
  heatPumps: {
    name: 'Alle woningen een warmtepomp',
    header: 'Woningen een warmtepomp',
    description: `
      Een elektrische warmtepomp is eigenlijk een omgekeerde koelkast.
      Met elektriciteit wordt lucht samengeperst, waardoor het volume afneemt en de temperatuur toe.
      Het omgekeerde effect merk je onder andere bij het gebruik van spuitbussen zoals bijvoorbeeld deodorant.
      Die koelt af bij het spuiten, doordat de lucht buiten de fles een groter volume krijgt.
    `,
    why: `
      Alle woningen een warmtepomp heeft zeker effect. Alleen niet alle woningen zijn geschikt voor een warmtepomp.
      Een huis moet zeer goed geïsoleerd zijn naar een label A of B. Dit is niet bij alle woningen mogelijk op een betaalbare manier.
      Ook moeten wij min Nederland meer duurzame elektriciteit produceren voor een grotere CO<sub>2</sub>-besparing.
    `
  },
  carPooling: {
    name: 'Carpoolen',
    header: 'Carpoolen',
    description: `
      Carpoolen betekent dat je i.p.v. alleen met meer mensen in de auto zit.
      Dit scheelt niet alleen ruimte op de weg, maar ook energie.
      Gemiddeld is de bezettingsgraad per gereden kilometer 1,43 persoon per auto.
      Wat gebeurt er als wij dit zouden verdubbelen?
    `,
    why: `
      Het effect van autodelen door het verdubbelen van het gemiddeld aantal inzittenden van 1,4 naar 2,8 levert 43%
      besparing op door auto’s verbruikte brandstof op. Dit is heel fors. Dat het geen 50% is komt doordat je vaak iets
      meer moet omrijden. Het is per rit circa 10% meer brandstof voor het omrijden en 3% meer voor het extra gewicht.
      Dus samen rijden is zowel gezelliger als duurzamer!
    `
  },
  wasteHeatIndustry: {
    name: 'Restwarmte uit de industrie inzetten voor verwarmen huizen',
    header: 'Restwarmtenet',
    description: `
      De industrie en datacenters hebben in sommige gevallen veel warmte waar ze zelf niets meer mee kunnen.
      Wat levert het op als 25% van de huizen met deze industriële restwarmte wordt verwarmd?
    `,
    why: `
      In Nederland is veel industrie. Ook deze industrie is in transitie naar CO<sub>2</sub>-neutrale productie.
      Industriële bedrijven houden vaak restwarmte over. Het zou een mooie en impactvolle oplossing zijn
      als we deze restwarmte gebruiken voor het verwarmen van woningen.
      Vooral in de dichtbebouwde binnensteden is dat een slimme optie.
    `
  },
  solarThermalParks: {
    name: 'Zonthermische parken',
    description: `
      Zonthermische parken zijn zonnepanelen die warmte produceren.
      Ze vangen de hitte op uit de zon en slaan die op in water om later te gebruiken.
      Het werkt hetzelfde als een leren autostoel die bloedheet wordt in de zon.
    `,
    why: `
      Zonthermische parken kunnen een bijdrage leveren aan onze warmwatervraag om bijvoorbeeld te douchen.
      Daarnaast is het ook mogelijk om het in te voeden in warmtenetten en er zo huizen mee te verwarmen.
      Een nadeel is dat de warmteproductie vooral in de zomer plaatsvindt en de vraag op z’n hoogst is in de winter,
      maar met opslag is dit grotendeels op te lossen.
  `
  },
  solarPanels: {
    name: 'Zonnepanelen op huizen',
    description: `
      Met een zonnepaneel op je dak ben je niet alleen consument maar ook producent van stroom.
      Wat gebeurt als we alle geschikte daken van huizen met zonnepanelen zouden bedekken?
    `,
    why: `
    Dit leidt tot een flinke besparing. Het elektriciteitsnetwerk bij je in de buurt zal waarschijnlijk wel
    een keertje verzwaard moeten worden, maar we kunnen heel veel CO<sub>2</sub>-uitstoot besparen als we dit doen.
    Je kan zelfs met een modern huis waarvan het dak vol met zonnepanelen ligt nu al net zoveel energie opwekken als je gebruikt.
    Als dat lukt, spreken we van ‘nul op de meter’. Betaalbare opslag van zoveel elektriciteit is nog wel een probleem.
    `
  },
  travelByTrain: {
    name: 'Verdubbelen ritten per trein',
    header: 'Reizen per trein',
    description: `
      Autovervoer kost veel energie. Wat gebeurt als we zoveel mensen kunnen overhalen om de trein te nemen dat het aantal treinreizigers verdubbelt?
      Het scheelt CO<sub>2</sub>-uitstoot, energie én files.
    `,
    why: `
      Treinreizen bespaart zeker een hoop CO<sub>2</sub>-uitstoot. Echter, alleen treinreizen is niet voldoende om de klimaatdoelen te halen.
      Daarnaast zijn er voor vervoer over de weg ook steeds meer CO<sub>2</sub>-neutrale opties, zoals elektrisch rijden.
      Niettemin blijft de trein een snel en handig vervoermiddel met chauffeur, een soort elektrisch carpoolen.
    `
  }
};
