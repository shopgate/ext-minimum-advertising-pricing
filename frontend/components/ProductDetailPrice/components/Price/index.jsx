import React from 'react';
import PropTypes from 'prop-types';
import PlaceholderLabel from '../../../PlaceholderLabel';
import PriceBase from './components/Price';
import styles from './style';

/**
 * The Price component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const Price = ({ price }) => (
  <PlaceholderLabel ready={(price !== null)} className={styles.placeholder}>
    {(price && price.unitPrice) && (
      <PriceBase
        className={styles.price}
        currency={price.currency}
        discounted={!!price.discount}
        taxDisclaimer
        unitPrice={price.totalPrice}
        unitPriceMin={price.unitPriceMin}
      />
    )}
  </PlaceholderLabel>
);

Price.propTypes = {
  price: PropTypes.shape(),
};

Price.defaultProps = {
  price: null,
};

export default Price;
