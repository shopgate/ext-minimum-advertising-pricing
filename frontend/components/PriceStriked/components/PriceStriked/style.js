import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const basic = css({
  color: themeConfig.colors.shade3,
  whiteSpace: 'nowrap',
  '& span': {
    position: 'relative',
    ':before': { // The strike-through effect is achieved by using the :before pseudo-class.
      borderColor: 'currentColor',
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
    },
  },
}).toString();

/**
 * Returns a class for the rotated strike-through line.
 * @param {number} angle The calculated angle for the strike-through line.
 * @returns {string} Classname
 */
const getAngleStyle = angle => css({
  '& span': {
    ':before': {
      borderTop: '1px solid',
      transform: `rotate(-${angle}deg)`,
    },
  },
}).toString();

export default {
  basic,
  getAngleStyle,
};
