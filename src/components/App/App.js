import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/defaultTheme';
import { app as copy } from '../../assets/copy/global.json';

export const App = props => (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <Helmet
        defaultTitle={copy.defaultTitle}
        titleTemplate={copy.defaultTitleTpl}
        meta={[{ name: 'description', content: copy.defaultDescription }]}
      />
      {props.children}
    </div>
  </ThemeProvider>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
