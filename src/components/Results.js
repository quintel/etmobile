import React from 'react';

import * as choiceImages from '../images/choices';

const Results = () => (
  <main className="results animated" key="results">
    <h1>Summary</h1>
    <h2>8 out of 13 correct</h2>

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
        <p>
          <a>View the leaderboard &raquo;</a>
        </p>
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

    <div className="result-item">
      <div className="status">
        <img
          src={choiceImages.coin}
          width="75"
          height="75"
          alt="presentation"
        />
        <span className="change worse">+4.8%</span>
      </div>
      <div className="info">
        <h4>Increased costs</h4>
        <p>
          Your decisions were more expensive than the status-quo. This is
          inevitable when investing in new technologies and infrastructure
          &ndash; as you did &ndash; but it can be hard to convince the public
          that the cost is worth it.
        </p>
        <p>
          <a>Learn more &raquo;</a>
        </p>
      </div>
    </div>
  </main>
);

export default Results;
