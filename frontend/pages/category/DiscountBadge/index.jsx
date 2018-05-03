import React from 'react';
import PropTypes from 'prop-types';
import connect from '../connector';
import DiscountBadgeBase from '../../../components/DiscountBadge';

/**
 * The CategoryItemPrice component.
 * @param {Object} props The component props.
 * @return {JSX|null}
 */
const DiscountBadge = ({ price, isMapProduct }) => {
  if (isMapProduct) {
    return null;
  }
  return (<DiscountBadgeBase text={`-${price.discount}%`} />);
};

DiscountBadge.propTypes = {
  isMapProduct: PropTypes.bool,
  price: PropTypes.shape(),
};

DiscountBadge.defaultProps = {
  isMapProduct: false,
  price: {},
};

export default connect(DiscountBadge);
