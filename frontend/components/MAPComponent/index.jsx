import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * The CategoryItemPrice component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
class MAPComponent extends Component {
  static propTypes = {
    baseProductId: PropTypes.string,
    children: PropTypes.node,
    getProducts: PropTypes.func,
    isMapProduct: PropTypes.bool,
    isMissingParentData: PropTypes.bool,
  };
  static defaultProps = {
    baseProductId: null,
    children: () => null,
    getProducts: () => {},
    isMapProduct: false,
    isMissingParentData: false,
  };

  /**
   * Request the products when the component mounts.
   */
  componentDidMount() {
    const { isMissingParentData, baseProductId, getProducts } = this.props;
    if (isMissingParentData) {
      getProducts(baseProductId);
    }
  }
}

export default MAPComponent;
