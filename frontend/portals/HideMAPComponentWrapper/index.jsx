import React from 'react';
import { RouteContext } from '@shopgate/pwa-common/context';
import { hex2bin } from '@shopgate/pwa-common/helpers/data';
import HideMAPComponent from '../HideMAPComponent';

/**
 * Renders HideMAPComponentWrapper component.
 * @param {Object} props Component props
 * @return {JSX}
 */
export default props => (
  <RouteContext.Consumer>
    {({ params }) => (
      <div>
        <HideMAPComponent {...props} productId={hex2bin(params.productId)} />
      </div>
    )}
  </RouteContext.Consumer>
);
