import React, { PropTypes } from 'react';

import * as choiceImages from '../images/choices';
import co2Svg from '../images/dashboard/co2_green.svg';

const correctChoicesText = (number) => {
  if (number === 0) {
    return 'You didn\'t make any correct choices.';
  }

  return `You made ${number} correct choice${number === 1 ? '' : 's'}`;
};

const Summary = ({ onRestartGame, gameState: { lastChoice, correctChoices } }) => (
  <main className="results animated" key="results">
    <h1>{ lastChoice.isCorrect ? 'Wow!' : 'Oops!' }</h1>
    <h2 className="result">
      { lastChoice.isCorrect ?
        'You got all the questions correct!' :
        'Sorry, that was the wrong choice' }
    </h2>

    <div className="result-item leaderboard">
      <div className="status">
        <img
          src={choiceImages.balloon}
          width="75"
          height="75"
          alt="presentation"
        />
      </div>
      <div className="info">
        <h4>You ranked 13th!</h4>
        <p>{correctChoicesText(correctChoices)}</p>
        <p><a>View the leaderboard &raquo;</a></p>
      </div>
    </div>

    <div className="result-item">
      <div className="status">
        <img
          src={choiceImages.co2}
          width="75"
          height="75"
          alt="presentation"
        />
        <span className="change better">-6.5%</span>
      </div>
      <div className="info">
        <h4>Reduced CO<sub>2</sub> emissions</h4>
        <p>
          Greenhouse gas emissions cause climate change. Your choiced reduce
          those emissions, but not by enough. The EU target is to reduce
          emissions by 80% before 2050.
        </p>
        <p>
          <a>Learn more &raquo;</a>
        </p>
      </div>
    </div>

    <button onClick={onRestartGame}>Try again?</button>

    <div className="choice-summary">
      <h2>Your choices</h2>
      <div className="result-item">
        <div className="status">
          <img
            src={choiceImages.wind}
            className="icon"
            width="75"
            height="75"
            alt="presentation"
          />
          <span className="target-delta">
            <img
              src={co2Svg}
              width="24"
              height="24"
              alt="presentation"
            />
            -3.1%
          </span>
        </div>
        <div className="info">
          <h4>Built 800 wind turbines</h4>
          <p>
            Your decision to build wind turbines instead of a coal plant was
            better for the environment, and is far healthier than coal, but
            offers worse value for money in the short-term due to higher
            installation costs.
          </p>
        </div>
      </div>

      <div className="result-item">
        <div className="status">
          <img
            src={choiceImages.ledLighting}
            width="75"
            height="75"
            alt="presentation"
          />
          <span className="target-delta">
            <img
              src={co2Svg}
              width="24"
              height="24"
              alt="presentation"
            />
            -2.3%
          </span>
        </div>
        <div className="info">
          <h4>Switched to LED light bulbs</h4>
          <p>
            You chose to install LED light bulbs in every household instead of
            strong excess energy in batteries. This quickly reduces
            CO<sub>2</sub> emissions and lowers costs, but batteries offer a
            great deal of flexibility in the long term as renewable energy
            becomes more common.
          </p>
        </div>
      </div>
    </div>
  </main>
);

Summary.propTypes = {
  gameState: PropTypes.shape({
    correctChoices: PropTypes.number.isRequired,
    lastChoice: PropTypes.shape({ isCorrect: PropTypes.boolean }).isRequired
  }).isRequired,
  onRestartGame: PropTypes.func.isRequired
};

export default Summary;
