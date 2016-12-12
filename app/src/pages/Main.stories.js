import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BrowserRouter from 'react-router/BrowserRouter';
import { Main } from './Main';
import '../style.scss';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
  },
};

const props = {
  authenticated: true,
  servers: [{
    name: 'Lithuania',
    distance: 11,
  }, {
    name: 'Panama',
    distance: 10150,
  }],
  fetchServers: () => {},
  signoutUser: () => {},
};

storiesOf('Main', module)
  .addDecorator(story => (
    <BrowserRouter>
      <div style={styles.container}>{story()}</div>
    </BrowserRouter>
  ))
  .add('page', () => (
    <Main {...props} />
  ));
