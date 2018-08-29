import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ProductPrice from '@shopgate/pwa-ui-shared/Price';
import ProductPriceStriked from '@shopgate/pwa-ui-shared/PriceStriked';
import I18n from '@shopgate/pwa-common/components/I18n';
import connect from './connector';
import styles from './style';

/**
 * Price component made for Favorites.
 */
class Price extends Component {
  static propTypes = {
    isMapProduct: PropTypes.bool.isRequired,
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.shape({
        currency: PropTypes.string.isRequired,
        unitPriceWithTax: PropTypes.number.isRequired,
        unitPriceStriked: PropTypes.number.isRequired,
        discount: PropTypes.number,
      }).isRequired,
    }).isRequired,
  };

  /**
   * Checks if component should update.
   * @param {Object} nextProps Next props.
   * @returns {boolean}
   */
  shouldComponentUpdate({ product }) {
    return !(
      this.props.product.price.currency === product.price.currency
      && this.props.product.price.unitPriceWithTax === product.price.unitPriceWithTax
      && this.props.product.price.unitPriceStriked === product.price.unitPriceStriked
    );
  }

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    if (this.props.isMapProduct) {
      return (
        <span>
          <I18n.Text string="minimum_ad_pricing.product_price.map_replacement" />
        </span>
      );
    }

    const { price } = this.props.product;

    return (
      <Fragment>
        {
          price.unitPriceStriked > 0
          && <ProductPriceStriked
            className={styles.strikedPrice}
            value={price.unitPriceStriked}
            currency={price.currency}
          />
        }
        <ProductPrice
          currency={price.price.currency}
          unitPrice={price.price.unitPriceWithTax}
          discounted={price.price.discount > 0}
          smallStriked
        />
      </Fragment>
    );
  }
}

export default connect(Price);
