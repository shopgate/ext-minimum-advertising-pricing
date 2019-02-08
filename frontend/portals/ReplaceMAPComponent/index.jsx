import React from 'react';
import I18n from '@shopgate/pwa-common/components/I18n';
import MAPComponent from '../../components/MAPComponent';
import connect from '../connector';

/**
 * The CategoryItemPrice component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
class ReplaceMAPComponent extends MAPComponent {
  /**
   * The render function.
   * @returns {JSX|null}
   */
  render() {
    const {
      isMapProduct, isMissingParentData, children, styling,
    } = this.props;
    if (isMissingParentData) {
      return null;
    }
    if (isMapProduct) {
      return (
        <span className={styling}>
          <I18n.Text string="minimum_ad_pricing.product_price.map_replacement" />
        </span>
      );
    }
    return children;
  }
}

export default connect(ReplaceMAPComponent);
