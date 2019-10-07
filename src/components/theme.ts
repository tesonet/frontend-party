import { ThemedStyledComponentsModule } from 'styled-components';
import * as sComponents from 'styled-components';

export const THEME_CONSTANTS = {
  media: {
    xs: 767,
    sm: 1023,
  },
};

const { media } = THEME_CONSTANTS;

export const getTheme = () => ({
  boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.4)',
  transition: 'box-shadow 0.5s, border-color 0.25s ease-in-out',
  zIndex: {
    toaster: 10000,
    modal: 9000,
    overlay: 8000,
    tooltip: 5500,
    dropdown: 6000,
    front: 5000,
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    darkGray: '#999999',
    grayLight: '#F5F5F5',
    gray: '#CCCCCC',
    disabled: '#FAFAFA',
    border: '#DDDDDD',
    primary: '#9FD533',
    primaryDark: '#86B300',
    error: '#FB1F1F',
    errorLight: '#FD5F5F',
    errorBorder: '#FDB6B6',
    errorBg: '#FFF7F7',
  },
  fonts: {
    family: 'Roboto, sans-serif',
    weight: {
      light: 300,
      normal: 400,
      semiBold: 500,
      bold: 600,
    },
    sizes: {
      small: '14px',
      normal: '16px',
      large: '18px',
      h0: '48px',
      h1: '32px',
      h2: '24px',
      h3: '18px',
      h4: '16px',
      xs: {
        h0: '30px',
        h1: '24px',
        h2: '18px',
        h3: '16px',
        h4: '14px',
      },
    },
  },
  media: {
    xs: {
      only: `@media (min-width: 0px) and (max-width: ${media.xs}px)`,
      andUp: `@media (min-width: 0px)`,
      andDown: `@media (max-width: ${media.xs}px)`,
    },
    sm: {
      only: `@media (min-width: ${media.xs + 1}px) and (max-width: ${
        media.sm
      }px)`,
      andUp: `@media (min-width: ${media.xs + 1}px)`,
      andDown: `@media (max-width: ${media.sm}px)`,
    },
    lg: {
      andUp: `@media (min-width: ${media.sm + 1}px)`,
    },
  },
});

type ThemeType = ReturnType<typeof getTheme>;

export interface Theme {
  theme?: ThemeType;
}

export const styledComponents: ThemedStyledComponentsModule<
  ThemeType
> = sComponents;

export const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} = styledComponents;
