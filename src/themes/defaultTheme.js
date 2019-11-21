import { createMuiTheme } from '@material-ui/core';

const defaultTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#9fd533',
      dark: '#86b300',
    },
  },
  props: {
    MuiButton: {
      color: 'primary',
      variant: 'contained',
    },
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
      autoComplete: 'off',
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: 'white'
      }
    }
  }
};

export default createMuiTheme(defaultTheme);
