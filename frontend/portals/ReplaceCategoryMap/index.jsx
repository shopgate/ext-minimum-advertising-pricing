import React from 'react';
import PropTypes from 'prop-types';
import ReplaceMAPComponent from '../ReplaceMAPComponent';
import styles from './styles';
import connect from './connector';
import { PRODUCT_GRID, IOS } from '../../constants';

/**
 * Renders ReplaceCategoryMap component.
 * @param {Object} props Component props
 * @return {JSX}
 */
const ReplaceCategoryMap = (props) => {
  const { platform, location } = props;
  return <ReplaceMAPComponent {...props} styling={styles(platform, location)} />;
};

ReplaceCategoryMap.propTypes = {
  location: PropTypes.string,
  platform: PropTypes.string,
};

ReplaceCategoryMap.defaultProps = {
  location: PRODUCT_GRID,
  platform: IOS,
}

export default connect(ReplaceCategoryMap);
