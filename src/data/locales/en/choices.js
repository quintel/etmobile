export default {
  batteries: {
    name: 'Thuisbatterijen',
    description: `
      Geef 25% van alle huishoudens een thuisbatterij die 19,8 kWh aan elektriciteit
      kan opslaan. Ter vergelijking: een gemiddeld huishouden gebruikt ongeveer 6-8 KWh elektriciteit per dag.
      Hiermee kunnen overschotten wind  en zonnestroom op een later tijdstip worden benut.
    `,
    why: `
      Helaas heeft het toevoegen van batterijen vanuit de bestaande situatie in Nederland
      nog geen zin voor de CO<sub>2</sub> besparing. Als we de batterijen kunnen inzetten
      om wind en zonnestroom op te slaan (die anders verloren zou zijn gegaan) hebben
      batterijen effect voor CO<sub>2</sub> besparing.
    `
  },
  buildOffshoreTurbines: {
    name: 'Bouw 500 offshore windturbines',
    header: 'Wind op zee',
    description: `
      Bouw 500 windturbines met een capaciteit van 10 MW, met een hoogte van bijna 200 meter.
      Deze windturbines staan op de Noordzee en produceren enkel waneer het hard genoeg waait.
    `,
    why: `
      Wind op zee heeft een grote impact op CO<sub>2</sub> besparing, omdat zonder CO<sub>2</sub>-uitstoot elektricteit
      wordt geproduceerd. Het waait natuurlijk lang niet altijd. Echter, windturbines op zee produceren toch ~40%-50% van de tijd op vol vermogen.
      Samen genereren deze molens jaarlijks ca. 19.700 GWh; dat is voldoende elektriciteit voor 5.8 miljoen huishoudens!
      Het waait alleen niet altijd. Grappig genoeg is het straks dus verstandig om je telefoon op te laden als het buiten
      hard waait of de zon schijnt!
    `
  },
  closeCoal: {
    name: 'Sluit alle kolencentrales',
    description: `
      Het sluiten van alle kolencentrales in Nederland zonder dat de elektriciteitsvraag verandert betekent dat onze stroom ergens anders vandaan moet komen.
      In dit geval gaan wij ervanuit dat de gascentrales de weggevallen stroomproductie op zich nemen.
    `,
    why: `
      Van fossiele elektriciteitscentrales stoten kolencentrales de meeste CO<sub>2</sub> uit.
      Vervanging van de productie uit kolen naar fossiel gas bespaart dus al fors CO<sub>2</sub>.
    `
  },
  openNuclear: {
    name: 'Open een nieuwe kerncentrale',
    description: `
     Open een nieuwe kerncentrale met hetzelfde formaat als de Borssele centrale (515 MWe).
     Kerncentrales zijn er in alle maten. Borssele is zeker niet de grootste. In Japan staat de allergrootste kerncentrale die is 16x groter dan in Borssele.
    `,
    why: `
      Kerncentrales stoten geen CO<sub>2</sub> uit bij de productie van elektriciteit.
      Wat dat betreft past het goed in een klimaatneutraal energiesysteem
      Wel is er veel discussie over het radioactieve afval, de impact als het toch fout gaat en de hoge investeringskosten.
      Ook is het de vraag of wind- en kernenergie goed in eenzelfde systeem werken. Een kerncentrale zet je liever niet uit en aan om de windpieken op te vangen.
    `
  },
  electricTrucks: {
    name: '50% van de vrachtwagens elektrisch',
    header: 'Elektrische vrachtwagens',
    description: `
      In Nederland verbruiken vrachtwagens ongeveer evenveel energie als auto’s.
      Wat zijn de mogelijkheden voor elektrificatie van het vrachtvervoer?
    `,
    why: `
      Elektrische vrachtauto's hebben ook met de huidige elektriciteitsmix (die toch
      voor het overgrote deel fossiel is) niet meteen een positieve impact op de CO<sub>2</sub>-uitstoot. Echter, nu
      wij overschakelen naar meer wind- en zonnestroom, wordt de klimaatwinst veel groter!
      Het is op dit moment nog niet aantrekkelijk om elektrische vrachtwagens voor lang en zwaar transport te kopen,
      maar in de steden zie je ze veel meer.
    `
  },
  electricVehicles: {
    name: 'Elke auto elektrisch',
    header: 'Reis per elektrische auto',
    description: `
      Elektrische auto’s gebruiken maar de helft van de ‘well-to-wheel’ energie in
      vergelijking tot auto's op benzine of diesel.
      Ze veroorzaken ook geen directe uitstoot, dus zijn lekker schoon voor jouw stad of dorp!
    `,
    why: `
      Elektrische auto's hebben ook met de bestaande elektriciteitsmix (die toch
      voor het overgrote deel fossiel is) een positieve impact op de CO<sub>2</sub>-uitstoot. En als
      we in de toekomst overschakelen naar meer wind- en zonnestroom, wordt deze winst vele malen hoger!
    `
  },
  travelByBikes: {
    name: 'Twee keer meer fietsen',
    header: 'Twee keer meer fietsen',
    description: `
      Fietsen is naast lopen misschien wel de meest klimaatvriendelijke manier om je te verplaatsen.
      Nederlanders fietsen jaarlijks bijna 1000 kilometer. Wat als wij twee keer zoveel zouden fietsen en minder de auto gebruiken?
    `,
    why: `
      Fietsen in plaats van met de auto heeft zeker impact. Op het klimaat, op jouw gezondheid en op de drukte in het verkeer.
      Met alleen wat meer fietsen gaat de transitie niet lukken, maar het draagt wel een steentje bij.
    `
  },
  greenGas: {
    name: 'Maak 10% van het gas groen',
    header: '10% groengas',
    description: `
      De naam zegt het al: groengas is groen! Groengas kan onder andere worden gemaakt vanuit mest en/of plantaardig materiaal.
      Verder is dit precies hetzelfde als het huidige fossiele gas. Het is namelijk methaan.
    `,
    why: `
      Aangezien we in Nederland nu zeer veel gas gebruiken, heeft 10% een behoorlijke impact.
      Er is echter niet voldoende groengas om de huidige fossiele gasvraag te vervangen.
    `
  },
  beterInsulationHomes: {
    name: 'Beter geïsoleerde huizen',
    header: 'Isolatie huizen',
    description: `
      Isolatie van woningen zorgt ervoor dat in de winter de warmte binnen blijft en in de zomer buiten.
      Denk bij isolatie aan dubbel of driedubbel glas, dakisolatie, vloerisolatie of de muren beter isoleren.

    `,
    why: `
      Heel veel woningen, met name de oudere woningen, kunnen veel beter geïsoleerd worden.
      Er is hier nog veel winst te behalen, zowel voor de portemonnee als voor het klimaat.
      Denk eens na wat er beter zou kunnen in jouw huis. Zou jij het weten?
    `
  },
  beterInsulationOffices: {
    name: 'Beter geïsoleerde scholen en kantoren',
    header: 'Isolatie kantoren',
    description: `
      De belangrijkste isolatiemaatregelen zijn dak-, muur-, vloerisolatie
      en dubbelglas. Met dit viertal kan 75% van de potentiële
      besparingen worden gerealiseerd.
      Wat zou het betekenen als wij al deze gebouwen eens veel beter zouden isoleren?
    `,
    why: `
      Kantoren, maar ook scholen en ziekenhuizen gebruiken veel energie voor het verwarmen en koelen. Als je de
      verwarming aanzet verdwijnt veel warmte door de ramen, kieren en muren naar
      buiten. Als we deze weggegooide energie kunnen tegenhouden, besparen we veel
      energie en daarmee CO<sub>2</sub>-uitstoot.
    `
  },
  hybridHeatPumps: {
    name: 'Alle woningen op hybride warmtepompen',
    header: 'Woningen een hybride-warmtepomp',
    description: `
      Deze verwarmingsoptie is een combinatie van een kleine elektrische warmtepomp
      en een HR ketel op gas. Wat als elk huis met deze technologie zou worden verwarmd?
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
    name: 'Gebruik van LED-lampen in woningen',
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
  heatPumps: {
    name: 'Alle woningen een warmtepomp',
    header: 'Woningen een warmtepomp',
    description: `
      Deze verwarmingsoptie maakt gebruik van een elektrische warmtepomp. Dit is eigenlijk een omgekeerde koelkast.
      Met elektriciteit wordt lucht samengeperst en hierdoor neemt het volume af en de temperatuur toe.
      Het omgekeerde effect zie je ook bij spuitbussen deodorant. Dit koelt af bij het spuiten omdat de lucht buiten de fles een groter volume krijgt.
    `,
    why: `
      Het verschil in CO<sub>2</sub>-uitstoot is niet zo heel groot.
      Dat komt doordat LNG ook een fossiele brandstof is. Het is wel veel schoner voor wat betreft
      uitstoot van zwaveldioxide en fijnstof, dus voor de luchtkwaliteit wel veel beter dan diesel.
    `
  },
  carPooling: {
    name: 'Carpoolen',
    header: 'Carpoolen',
    description: `
      Carpoolen betekent dat je met meerdere mensen in de auto gaat zitten i.p.v. alleen. Dit scheelt niet alleen ruimte op de weg, maar ook energie.
      Gemiddeld is de bezettingsgraad per gereden kilometer 1,43 persoon per auto. Wat als wij dit zouden verdubbelen?
    `,
    why: `
      Het effect van autodelen door verdubbelend inzittenden van 1,4 naar 2,8 levert 43% energiebesparing voor auto's op. Dit is heel fors. Samen rijden is dus zowel gezelliger als duurzamer!
      Dat het geen 50% is komt doordat je vaak iets meer moet omrijden. Het kost per rit circa 10% meer brandstof voor het omrijden en 3% meer voor het extra gewicht.
    `
  },
  wasteHeatIndustry: {
    name: 'Restwarmte uit de industrie inzetten voor verwarmen huizen',
    header: 'Restwarmtenet',
    description: `
      De industrie en datacenters hebben in sommige gevallen veel warmte waar ze zelf niets meer mee kunnen. Wat als deze 25% van de huizen met industriële restwarmte wordt gevoed?
    `,
    why: `
      In Nederland is veel industrie. Ook deze industrie is in transitie naar CO<sub>2</sub>-vrije productie. Alsnog kan deze industrie restwarmte produceren waar ze zelf niets mee kunnen.
      Het zou een mooie en impactvolle oplossing zijn om deze retwarmte nuttig te gebruiken.
      Het verwarmen van woningen in dichtbebouwde binnensteden is dan een goede optie.
    `
  },
  solarThermalParks: {
    name: 'Zonthermische parken',
    description: `
      Zonthermische parken zijn zonnepanelen die warmte produceren. Ze vangen de hitte op uit de zon en slaan dit op in water om later te gebruiken.
      Het werkt hetzelfde als die leren autostoel die bloedheet wordt in de zon.
    `,
    why: `
      Zonthermische parken kunnen een bijdrage leveren aan onze warmwatervraag om bijvoorbeeld te douchen.
      Daarnaast is het ook mogelijk om het in te voeden in warmtenetten en zo huizen mee te verwarmen.
      Een uitdaging is wel dat de warmteproductie vooral in de zomer is en de vraag in de winter, met opslag is dit grotendeels op te lossen.
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
    name: 'Verdubbelen ritten per trein',
    header: 'Reizen per trein',
    description: `
      Autovervoer kost veel energie. Wat gebeurt als we zoveel mensen kunnen overhalen om de trein te nemen dat het aantal treinreizigers verdubbeld?
      Het scheelt CO<sub>2</sub>-uitstoot, energie én files.
    `,
    why: `
      Treinreizen bespaart zeker een hoop CO<sub>2</sub>-uitstoot. Echter, alleen treinreizen is niet voldoende om de klimaatdoelen te halen.
      Daarnaast zijn er voor vervoer over de weg ook steeds meer CO<sub>2</sub>-neutrale opties, zoals elektrisch rijden.
      De trein blijft een snel en handig vervoersmiddel met een gratis chauffeur, een soort elektrisch carpoolen.
    `
  }
};
