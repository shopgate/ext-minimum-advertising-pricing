/**
 * Checks if current theme is an iOS theme.
 * @returns {boolean}
 */
export const isIOSTheme = () => process.env.THEME.includes('ios');
