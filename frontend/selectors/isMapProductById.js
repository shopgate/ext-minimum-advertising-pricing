import { createSelector } from 'reselect';
import { getProductById } from '@shopgate/pwa-common-commerce/product/selectors/product';

export const isMapProductById = createSelector(
  getProductById,
  (product) => {
    if (product.productData
      && product.productData.flags
      && product.productData.flags.isMapProduct) {
      return true;
    }

    return false;
  }
);
