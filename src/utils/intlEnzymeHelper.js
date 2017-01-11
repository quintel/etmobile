/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme. These helper
 * functions aim to address that and wrap a valid English-locale intl context
 * around them.
 */

import { IntlProvider, intlShape } from 'react-intl';

// eslint-disable-next-line import/no-extraneous-dependencies
import { mount, shallow } from 'enzyme';

// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
import messages from '../data/locales/en'; // en.js

// Create the IntlProvider to retrieve context for wrapping around.
const intlProvider = new IntlProvider({ locale: 'en', messages }, {});
const { intl } = intlProvider.getChildContext();

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
// const nodeWithIntlProp = node => React.cloneElement(node, { intl });

const shallowWithIntl = (node, { context } = {}) => (
  shallow(
    node,
    { context: Object.assign({}, context, { intl }) }
  )
);

const mountWithIntl = (node, { context, childContextTypes } = {}) => (
  mount(
    node,
    {
      context: Object.assign({}, context, { intl }),
      childContextTypes: Object.assign(
        {},
        { intl: intlShape },
        childContextTypes
      )
    }
  )
);

export { shallowWithIntl, mountWithIntl };
