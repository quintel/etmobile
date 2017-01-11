/* eslint no-param-reassign:0 */
import { intlShape } from 'react-intl';

/**
 * Injects the Intl instance on the context of the wrapped component. This
 * simple version is used in preference over the one included with react-intl
 * since it avoid having to (extensively) alter tests to use
 * <Component>.WrappedComponent and getWrappedComponent().
 */
export default (component) => {
  component.contextTypes = component.contextTypes || {};
  component.contextTypes.intl = intlShape;

  return component;
};
