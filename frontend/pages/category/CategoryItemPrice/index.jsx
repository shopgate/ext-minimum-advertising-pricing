import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import connect from '../connector';
import PriceWrapperGrid from './components/PriceWrapperGrid';
import PriceWrapperList from './components/PriceWrapperList';
import { LIST_VIEW } from '../constants';

/**
 * The CategoryItemPrice component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const CategoryItemPrice = ({ price, isMapProduct, viewMode }) => {
  if (isMapProduct) {
    return (
      <span>
        <I18n.Text string="minimum_ad_pricing.product_price.map_replacement" />
      </span>
    );
  }
  return (
    viewMode === LIST_VIEW ?
      <PriceWrapperList price={price} /> :
      <PriceWrapperGrid price={price} />
  );
};

CategoryItemPrice.propTypes = {
  isMapProduct: PropTypes.bool,
  price: PropTypes.shape(),
  viewMode: PropTypes.string,
};

CategoryItemPrice.defaultProps = {
  isMapProduct: false,
  price: {},
  viewMode: LIST_VIEW,
};

export default connect(CategoryItemPrice);
