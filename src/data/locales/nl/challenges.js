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

    expires: {
      title: 'Challenge lasts for',
      description: `
        Once your challenge has finished, no new entries will be shown
        on the leaderboard.
      `
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
