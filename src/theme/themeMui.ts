import { createMuiTheme } from '@material-ui/core/styles';

import { colors } from './colors';

export const themeMui = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
    },
    secondary: {
      main: colors.white,
    },
  },
});
