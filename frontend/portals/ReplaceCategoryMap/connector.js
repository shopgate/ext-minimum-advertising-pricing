import { connect } from 'react-redux';
import { isAndroid } from '@shopgate/pwa-common/selectors/client';
import { ANDROID, IOS } from '../../constants';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => (
  {
    platform: isAndroid(state) ? ANDROID : IOS,
  }
);

export default connect(mapStateToProps);
