import MAPComponent from '../../components/MAPComponent';
import connect from '../connector';

/**
 * The CategoryItemPrice component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
class HideMAPComponent extends MAPComponent {
  /**
   * The render function.
   * @returns {JSX|null}
   */
  render() {
    const { isMapProduct, isMissingParentData, children } = this.props;
    if (isMissingParentData || isMapProduct) {
      return null;
    }

    return children;
  }
}

export default connect(HideMAPComponent);
