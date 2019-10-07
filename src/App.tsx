import { Theme, ThemeProvider } from '@components/theme';
import { authActions } from '@modules/auth/duck/actions';
import { RoutesManager } from '@modules/routes/RoutesManager';
import { ToasterManager } from '@modules/toaster/ToasterManager';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';
import { DispatchProp, connect } from 'react-redux';
import * as webFontLoader from 'webfontloader';

import { useMountEffect } from './helpers/lifecycleEffects';

const loadFonts = () => {
  webFontLoader.load({
    google: {
      families: ['Material Icons', 'Roboto'],
    },
  });
};

loadFonts();

type Props = Theme &
  DispatchProp & {
    history: History;
  };

const Component = ({ theme, dispatch, history }: Props) => {
  useMountEffect(() => {
    dispatch(authActions.getLoggedInStatus());
  });

  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <RoutesManager />
        <ToasterManager />
      </ConnectedRouter>
    </ThemeProvider>
  );
};

export const App = connect()(Component);
