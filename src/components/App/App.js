import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../styles/defaultTheme';

export const App = props => (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <Helmet
        defaultTitle="Senior Frontend Party"
        titleTemplate="SFP Testio | %s"
        meta={[{ name: 'description', content: 'Senior Frontend Party App - Testio.' }]}
      />
      {props.children}
    </div>
  </ThemeProvider>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
