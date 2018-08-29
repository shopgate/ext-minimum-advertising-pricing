import { connect } from 'react-redux';
import { isMapProductById } from '../../../selectors/isMapProductById';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The current props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, { product = {} }) => ({
  isMapProduct: isMapProductById(state, product.id),
});

export default connect(mapStateToProps);
