import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import LeaderBoard from './LeaderBoard';
import ChallengeList from '../components/ChallengeList';

import mosaic from '../images/mosaic.png';

const FrontPage = props => (
  <div className="front-page">
    <main>
      <h1>
        Energy Transition Model
        <span className="subtitle">Reduce your CO<sub>2</sub> emissions</span>
      </h1>
      <div className="mosaic" style={{ backgroundImage: `url(${mosaic})` }}>
        <div className="fade" />
      </div>
      <div className="game-info">
        <p>
          <strong>
            You will be presented with two choices; which one will lower
            CO<sub>2</sub> the most? How many correct answers can you manage?
          </strong>
        </p>

        <div className="play-wrapper">
          <Link to="/play" className="button">
            Play the game{' '}
            <span className="arrows">&raquo;</span>
          </Link>
        </div>

        <p>
          &ldquo;Energy transition&rdquo; is the process of converting a
          region&apos;s sources of energy from older, polluting technologies to
          newer, cleaner, more sustainable sources.
        </p>

        <p>
          It also explores how emerging technologies like batteries and electric
          cars may change the way we use energy in the future.
        </p>
      </div>

      <LeaderBoard
        base={props.base}
        endpoint="all"
        title="All-time high scores"
      />

      <div className="challenges">
        <h2>Challenges</h2>
        <ChallengeList base={props.base} active />

        <Link to="/new-challenge" className="button new-challenge">
          Create a new challenge
        </Link>
      </div>
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
