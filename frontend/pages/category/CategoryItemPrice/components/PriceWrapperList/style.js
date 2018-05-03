import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const elementPadding = themeConfig.variables.gap.big / 2;

const containerPaddingSidewards = {
  padding: elementPadding,
};

const priceContainer = css({
  ...containerPaddingSidewards,
  lineHeight: 1.35,
  textAlign: 'right',
  div: {
    marginBottom: 4,
  },
}).toString();

const priceStriked = css({
  fontSize: '0.875rem',
}).toString();

const priceInfo = css({
  fontSize: '0.75rem',
}).toString();

export default {
  priceContainer,
  priceStriked,
  priceInfo,
};
