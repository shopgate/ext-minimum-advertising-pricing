import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@shopgate/pwa-common/components/Grid';
import Price from '../../../../../components/Price';
import PriceStriked from '../../../../../components/PriceStriked';
import PriceInfo from '../../../../../components/PriceInfo';
import styles from './style';

/**
 * The PriceWrapperList component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const PriceWrapperList = ({ price }) => (
  <Grid.Item grow={1} className={styles.priceContainer}>
    <Price
      unitPrice={price.unitPrice}
      unitPriceMin={price.unitPriceMin}
      discounted={!!price.discount}
      currency={price.currency}
    />
    {(price.msrp > 0 && price.unitPrice !== price.msrp) && (
      <PriceStriked
        value={price.msrp}
        currency={price.currency}
        className={styles.priceStriked}
      />
    )}
    {(!price.msrp && price.unitPriceStriked > 0) && (
      <PriceStriked
        value={price.unitPriceStriked}
        currency={price.currency}
        className={styles.priceStriked}
      />
    )}
    {price.info && (
      <PriceInfo text={price.info} className={styles.priceInfo} />
    )}
  </Grid.Item>
);

PriceWrapperList.propTypes = {
  price: PropTypes.shape(),
};

PriceWrapperList.defaultProps = {
  price: {},
};

export default PriceWrapperList;
