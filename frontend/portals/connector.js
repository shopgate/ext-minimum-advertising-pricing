import { connect } from 'react-redux';
import { getBaseProductId } from '@shopgate/pwa-common-commerce/product/selectors/product';
import fetchProductsById from '@shopgate/pwa-common-commerce/product/actions/fetchProductsById';
import { isMapParentProductById, getIsMissingParentData } from '../selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props Given component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => {
  const propsToPass = props && props.product ? { productId: props.product.id } : props;
  return {
    isMapProduct: isMapParentProductById(state, propsToPass),
    isMissingParentData: getIsMissingParentData(state, propsToPass),
    baseProductId: getBaseProductId(state, propsToPass),
  };
};

/**
 * Maps the contents of the state to the component props.
 * @param  {Function} dispatch The redux dispatch function.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  getProducts: id => (
    dispatch(fetchProductsById([id]))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps);
