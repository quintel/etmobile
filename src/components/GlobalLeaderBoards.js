import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FormattedMessage } from 'react-intl';

import LeaderBoard from './LeaderBoard';

import { easy, medium, hard } from '../data/gameModes';

Tabs.setUseDefaultStyles(false);

const GlobalLeaderBoards = props => (
  <Tabs selectedIndex={0}>
    <TabList>
      <Tab><FormattedMessage id={easy.name} /></Tab>
      <Tab><FormattedMessage id={medium.name} /></Tab>
      <Tab><FormattedMessage id={hard.name} /></Tab>
    </TabList>

    <TabPanel>
      <LeaderBoard base={props.base} endpoint={easy.endpoint} />
    </TabPanel>
    <TabPanel>
      <LeaderBoard base={props.base} endpoint={medium.endpoint} />
    </TabPanel>
    <TabPanel>
      <LeaderBoard base={props.base} endpoint={hard.endpoint} />
    </TabPanel>
  </Tabs>
);

GlobalLeaderBoards.propTypes = {
  base: PropTypes.shape({
    ...LeaderBoard.propTypes.base
  })
};

export default GlobalLeaderBoards;
