import React from 'react';
import PropTypes from 'prop-types';
import connect from '../connector';
import StrikePrice from '../../../components/PriceStriked';

/**
 * The ProductDetailStrikePrice component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const ProductDetailStrikePrice = ({ price, isMapProduct }) => {
  if (isMapProduct) {
    return null;
  }
  return (
    <StrikePrice price={price} />
  );

};

ProductDetailStrikePrice.propTypes = {
  isMapProduct: PropTypes.bool,
  price: PropTypes.shape(),
};

ProductDetailStrikePrice.defaultProps = {
  isMapProduct: false,
  price: null,
};

export default connect(ProductDetailStrikePrice);
