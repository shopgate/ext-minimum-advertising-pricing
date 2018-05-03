import { connect } from 'react-redux';
import { getProductPriceById } from '../../selectors/getProductPriceById';
import { isMapProductById } from '../../selectors/isMapProductById';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {string} productId Given product.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, { productId }) => ({
  price: getProductPriceById(state, productId),
  isMapProduct: isMapProductById(state, productId),
  viewMode: state.ui.categoryPage.viewMode,
});

export default connect(mapStateToProps);
