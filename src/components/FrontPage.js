import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import injectIntl from '../utils/injectIntl';

import GlobalLeaderBoards from './GlobalLeaderBoards';
import LeaderBoard from './LeaderBoard';
import ChallengeList from '../components/ChallengeList';
import Footer from '../components/Footer';
import HiddenText from '../components/HiddenText';
import LanguageSelection from '../components/LanguageSelection';

import mosaic from '../images/mosaic.png';

const FrontPage = (props, context) => (
  <div className="front-page">
    <main>
      <h1>
        <FormattedMessage id="app.name" />
        <span className="subtitle">
          <FormattedHTMLMessage id="app.tagline" />
        </span>
      </h1>
      <div className="mosaic" style={{ backgroundImage: `url(${mosaic})` }}>
        <div className="fade" />
      </div>
      <div className="game-info">
        <p>
          <strong><FormattedHTMLMessage id="app.description" /></strong>
        </p>

        <HiddenText
          buttonText={context.intl.formatMessage({
            id: 'frontPage.readDescription'
          })}
        >
          <div className="etm-description">
            <FormattedHTMLMessage id="frontPage.etmDescription" />
          </div>
        </HiddenText>

        <div className="play-wrapper">
          <Link to="/play" className="button">
            <FormattedMessage id="frontPage.playGame" />{' '}
            <span className="arrows">&raquo;</span>
          </Link>

          <LanguageSelection setLocale={props.setLocale} />
        </div>
      </div>

      <div className="global-leaderboards">
        <h2><FormattedMessage id="leaderboard.all" /></h2>
        <GlobalLeaderBoards base={props.base} />
      </div>

      <div className="challenges">
        <h2><FormattedMessage id="challenges.title" /></h2>
        <ChallengeList base={props.base} active />

        <Link to="/new-challenge" className="button new-challenge">
          <FormattedMessage id="challenges.create" />
        </Link>

        <p className="challenge-info">
          <FormattedMessage id="challenges.description" />
        </p>
      </div>
    </main>

    <Footer setLocale={props.setLocale} />
  </div>
);

FrontPage.propTypes = {
  base: PropTypes.shape({
    ...LeaderBoard.propTypes.base,
    ...ChallengeList.propTypes.base
  }),
  setLocale: PropTypes.func.isRequired
};

export default injectIntl(FrontPage);
