import { connect } from 'react-redux';
import { getProductPrice } from '@shopgate/pwa-common-commerce/product/selectors/price';
import { isMapProduct } from '../../selectors/isMapProduct';


/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  price: getProductPrice(state),
  isMapProduct: isMapProduct(state)
});

export default connect(mapStateToProps);
