import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@shopgate/pwa-common/components/Grid';
import Price from '../../../../../components/Price';
import PriceStriked from '../../../../../components/PriceStriked';
import styles from './style';

/**
 * The PriceWrapperGrid component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const PriceWrapperGrid = ({ price }) => (
  <Grid className={styles.priceWrapper} wrap>
    <Grid.Item grow={1}>
      <Price
        unitPrice={price.unitPrice}
        unitPriceMin={price.unitPriceMin}
        discounted={!!price.discount}
        currency={price.currency}
      />
    </Grid.Item>
    {(price.msrp > 0 && price.unitPrice !== price.msrp) && (
      <Grid.Item>
        <PriceStriked
          value={price.msrp}
          currency={price.currency}
        />
      </Grid.Item>
    )}
    {(!price.msrp && price.unitPriceStriked > 0) && (
      <Grid.Item>
        <PriceStriked
          value={price.unitPriceStriked}
          currency={price.currency}
        />
      </Grid.Item>
    )}
  </Grid>
);

PriceWrapperGrid.propTypes = {
  price: PropTypes.shape(),
};

PriceWrapperGrid.defaultProps = {
  price: {},
};

export default PriceWrapperGrid;
