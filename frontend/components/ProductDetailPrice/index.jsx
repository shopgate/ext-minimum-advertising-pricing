import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import connect from './connector';
import Price from './components/Price';

/**
 * The ProductDetailPrice component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const ProductDetailPrice = ({ price, isMapProduct }) => {
  if (isMapProduct) {
    return (
      <span>
        <I18n.Text string="minimum_ad_pricing.product_price.map_replacement" />
      </span>
    );
  }
  return (
    <Price price={price} />
  );
};

ProductDetailPrice.propTypes = {
  isMapProduct: PropTypes.bool,
  price: PropTypes.shape(),
};

ProductDetailPrice.defaultProps = {
  isMapProduct: false,
  price: null,
};

export default connect(ProductDetailPrice);
