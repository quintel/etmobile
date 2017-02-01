/* istanbul ignore next */
export default {
  title: 'Challenges',
  create: 'Creëer een nieuwe challenge',
  loadingChallenges: 'Laden van de challenges',
  ends: 'Eindigt', /* Eindigt in ... */

  errors: {
    starting: 'Sorry, er gaat iets mis bij het openen van deze challenge',
    missingName: 'Je moet een naam opgeven voor deze challenge.'
  },

  form: {
    title: 'Creëer een nieuwe challenge',

    name: {
      title: 'Naam van de challenge',
      description: `
        Kies een naam voor deze challenge. Bijvoorbeeld de naam van je
        klas, de conferentie waar je bent, of de naam van je groep.
      `,
      placeholder: 'Kies een naam'
    },

    difficulty: {
      title: 'Moeilijkheidsgraad',
      description: `
        Bij “Normal” mag je twee fouten maken.
        Bij “Uitdagend” mag je maar één fout maken, en bij “expert” mag je
        zelfs maar nul fouten maken!
      `
    },

    expires: {
      title: 'Uitdaging duurt:',
      description: `
        Als je uitdaging is afgelopen, kan niemand meer meestrijden om de
        eerste plek!
      `,
      options: {
        '4h': '4 uur',
        '8h': '8 uur',
        '1d': '1 dag',
        '3d': '3 dagen',
        '1w': '1 week',
        '2w': '2 weken',
        '1m': '1 maand'
      }
    },

    submit: 'Creëer een challenge.'
  },

  description: `
    Challenges allow your conference, classroom, or group to have a
    leaderboard all to yourselves!
  `,

  play: 'Play now!',
  leaderboard: 'Leaderboard'
};
