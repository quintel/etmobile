import flatten from './flatten';

export default flatten({
  /**
   * Misc. app texts
   */
  app: {
    name: 'Energy Transition Model',
    shortName: 'ETMobile',
    tagline: 'Reduce your CO<sub>2</sub> emissions',

    description: `
      You will be presented with two choices; which one will lower
      CO<sub>2</sub> the most? How many correct answers can you manage?
    `
  },

  /**
   * Messages used when playing the game.
   */
  game: {
    correct: 'Correct',
    incorrect: 'Incorrect'
  },

  /**
   * Messages specific to the front page.
   */
  frontPage: {
    etmDescriptionOne: `
      “Energy transition” is the process of converting a region's sources of
      energy from older, polluting technologies to newer, cleaner, more
      sustainable sources.
    `,

    etmDescriptionTwo: `
      It also explores how emerging technologies like batteries and electric
      cars may change the way we use energy in the future.
    `,

    playGame: 'Play the game'
  },

  /**
   * Messages specific to leaderboards.
   */
  leaderboard: {
    all: 'All-time high scores',
    anon: 'Anonymous',
    loading: 'Loading leaderboard',
    noPlayers: 'No players yet!',
    playerNameDescription: `
      This is how you will appear on the leaderboard. You may remain anonymous
      if you prefer.
    `,
    result: 'got {score} correct',
    yourName: 'Your name'
  },

  /**
   * Messages specific to challenges.
   */
  challenges: {
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
  },

  /**
   * Messages displayed in the footer.
   */
  footer: {
    developedBy: 'Developed by Quintel Intelligence',
    etm: 'Energy Transition Model',
    iconsBy: 'Icons by Vectors Market and Freepik at {link}',
    partOfTheETM: 'Part of the {etmLink}',
    privacy: 'Privacy',
    terms: 'Terms of Service'
  },

  /**
   * Messages for the summary page.
   */
  summary: {
    allCorrect: 'You got all the questions correct!',
    correctWas: 'The correct answer was',
    numberCorrect: `
      You made {correct, plural,
        =0 {no correct choices!}
        one {one correct choice.}
        other {{correct} correct choices.}
      }
    `,
    oops: 'Oops!',
    tryAgain: 'Try again?',
    wow: 'Wow!'
  }
});
