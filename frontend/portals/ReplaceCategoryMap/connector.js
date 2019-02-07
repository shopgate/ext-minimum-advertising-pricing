import { connect } from 'react-redux';
import { isIOSTheme } from '../../helpers';
import { ANDROID, IOS } from '../../constants';

/**
 * Maps the contents of the state to the component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = () => (
  {
    theme: isIOSTheme() ? IOS : ANDROID,
  }
);

export default connect(mapStateToProps);
