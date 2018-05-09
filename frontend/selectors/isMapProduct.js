import { createSelector } from 'reselect';
import { getCurrentBaseProduct } from '@shopgate/pwa-common-commerce/product/selectors/product';

export const isMapProduct = createSelector(
  getCurrentBaseProduct,
  (currentBaseProduct) => {
    if (currentBaseProduct && currentBaseProduct.flags && currentBaseProduct.flags.isMapProduct) {
      return true;
    }

    return false;
  }
);
