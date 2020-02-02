const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif'

// TODO: support theming
const theme = {
  typography: {
    fontFamily: defaultFontFamily,
    button: {
      fontFamily: defaultFontFamily,
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    input: {
      fontFamily: defaultFontFamily,
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: defaultFontFamily,
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#9fd533',
      light: '#9fd533',
      dark: '#9fd533',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(220, 0, 78)',
      light: 'rgb(227, 51, 113)',
      dark: 'rgb(154, 0, 54)',
      contrastText: '#fff',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff',
    },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
  },
  text: {
    primary: '#2F3254',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  zIndex: {
    appBar: 1100,
  },
}

export default theme
