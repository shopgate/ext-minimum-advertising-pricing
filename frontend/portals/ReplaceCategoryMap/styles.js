import { css } from 'glamor';
import {
  IOS,
  ANDROID,
  PRODUCT_GRID,
  PRODUCT_CARD,
  PRODUCT_LIST,
} from '../../constants';

const defaultStyle = {
  display: 'flex',
  lineHeight: 1.75,
};

const iosDefaultStyle = {
  ...defaultStyle,
  marginTop: 2,
}

const styles = {
  [IOS]: {
    [PRODUCT_GRID]: iosDefaultStyle,
    [PRODUCT_LIST]: iosDefaultStyle,
    [PRODUCT_CARD]: iosDefaultStyle,
  },
  [ANDROID]: {
    [PRODUCT_GRID]: defaultStyle,
    [PRODUCT_LIST]: defaultStyle,
    [PRODUCT_CARD]: { ...defaultStyle, fontSize: '4vw' },
  },
};

/**
 * Return the correct style based on platform and location
 * @param {string} platform Name of platform -- IOS or ANDROID
 * @param {location} location Name of location
 * @return {string|null}
 */
export default (platform, location) => {
  if (!styles[platform] || !styles[platform][location]) {
    return null;
  }

  return css(styles[platform][location]).toString();
};
