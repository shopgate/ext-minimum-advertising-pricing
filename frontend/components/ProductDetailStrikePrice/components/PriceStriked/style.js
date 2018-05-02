import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const placeholder = css({
  height: 16,
  width: '70%',
  marginTop: 5,
  marginBottom: 2,
}).toString();

const msrp = css({
  color: themeConfig.colors.shade3,
  fontSize: '0.875rem',
  marginRight: themeConfig.variables.gap.small / 2,
}).toString();

const msrpStriked = css({
  display: 'inline',
  fontSize: '0.875rem',
}).toString();

export default {
  placeholder,
  msrp,
  msrpStriked,
};
