import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BrowserRouter from 'react-router/BrowserRouter';
import NotFound from './NotFound';
import '../style.scss';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
  },
};

storiesOf('NotFound', module)
  .addDecorator(story => (
    <BrowserRouter>
      <div style={styles.container}>{story()}</div>
    </BrowserRouter>
  ))
  .add('page', () => (
    <NotFound />
  ));
