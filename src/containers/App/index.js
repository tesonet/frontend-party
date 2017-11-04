import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export const App = (props) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        titleTemplate="Testio - %s"
        defaultTitle="Testio - server distance is just a number."
        meta={[
          { name: 'description', content: 'Testio. Home work exercise' },
        ]}
      />
      {React.Children.toArray(props.children)}
    </div>
  </ThemeProvider>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
