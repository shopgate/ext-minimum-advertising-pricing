import React from 'react';
import { RouteContext } from '@shopgate/pwa-common/context';
import { hex2bin } from '@shopgate/pwa-common/helpers/data';
import ReplaceMAPComponent from '../ReplaceMAPComponent';

/**
 * Renders ReplaceMAPComponentWrapper component.
 * @param {Object} props Component props
 * @return {JSX}
 */
export default props => (
  <RouteContext.Consumer>
    {({ params }) => (
      <div>
        <ReplaceMAPComponent {...props} productId={hex2bin(params.productId)} />
      </div>
    )}
  </RouteContext.Consumer>
);
