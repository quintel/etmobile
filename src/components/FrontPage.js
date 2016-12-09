import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Header from './Header';
import LeaderBoard from './LeaderBoard';
import ChallengeList from '../components/ChallengeList';

const FrontPage = props => (
  <div className="front-page">
    <Header />
    <main>
      <div className="game-info">
        <p>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
          courgette tatsoi pea sprouts fava bean collard greens dandelion okra
          wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </p>
        <Link to="/play" className="button">Play the game!</Link>
      </div>

      <LeaderBoard base={props.base} endpoint="all" />

      <ChallengeList base={props.base} active />
    </main>
  </div>
);

FrontPage.propTypes = {
  base: PropTypes.shape({
    ...LeaderBoard.propTypes.base,
    ...ChallengeList.propTypes.base
  })
};

export default FrontPage;
