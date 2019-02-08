import { createSelector } from 'reselect';
import { getProductFlags, getBaseProductId, getBaseProduct } from '@shopgate/pwa-common-commerce/product/selectors/product';

export const isMapProductById = createSelector(
  getProductFlags,
  flags => (flags ? !!flags.isMapProduct : false)
);

export const isMapParentProductById = createSelector(
  isMapProductById,
  getBaseProduct,
  (productIsMapped, baseProduct) => {
    if (baseProduct) {
      const { flags = {} } = baseProduct;
      return !!flags.isMapProduct;
    }
    return productIsMapped;
  }
);

export const getIsMissingParentData = createSelector(
  getBaseProductId,
  getBaseProduct,
  (baseProductId, baseProduct) => {
    if (baseProductId && !baseProduct) {
      return true;
    }
    return false;
  }
);
