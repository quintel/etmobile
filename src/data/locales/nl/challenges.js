/* istanbul ignore next */
export default {
  title: 'Challenges',
  create: 'Create a new challenge',
  loadingChallenges: 'Loading challenges',
  ends: 'Ends', /* Ends in ... */

  errors: {
    starting: 'Sorry, there was an error starting your challenge.',
    missingName: 'You must enter a name for your challenge!'
  },

  form: {
    title: 'Create a new challenge',

    name: {
      title: 'Challenge name',
      description: `
        Choose a name for your challenge. For example, the name of
        your classroom, conference, or group.
      `,
      placeholder: 'Choose a name'
    },

    difficulty: {
      title: 'Difficulty setting',
      description: `
        “Normal” permits two incorrect answers before the game end.
        “Challenging” allows one, while “expert” ends upon the first incorrect
        answer.
      `
    },

    expires: {
      title: 'Challenge lasts for',
      description: `
        Once your challenge has finished, no new entries will be shown
        on the leaderboard.
      `,
      options: {
        '4h': '4 hours',
        '8h': '8 hours',
        '1d': '1 day',
        '3d': '3 days',
        '1w': '1 week',
        '2w': '2 weeks',
        '1m': '1 month'
      }
    },

    submit: 'Create challenge'
  },

  description: `
    Challenges allow your conference, classroom, or group to have a
    leaderboard all to yourselves!
  `,

  play: 'Play now!',
  leaderboard: 'Leaderboard'
};
