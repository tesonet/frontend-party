import { font } from './font';
import * as colors from './colors';

export const theme = {
  ...font,
  ...colors,
};

export type Theme = typeof theme;
