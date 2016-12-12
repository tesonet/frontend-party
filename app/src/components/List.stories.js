import React from 'react';
import { storiesOf } from '@kadira/storybook';
import List from './List';
import '../style.scss';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
};

const props = {
  data: [{
    name: 'Lithuania',
    distance: 11,
  }, {
    name: 'Panama',
    distance: 10150,
  }],
};

storiesOf('List', module)
  .addDecorator(story => (
    <div style={styles.container}>{story()}</div>
  ))
  .add('two items', () => (
    <List {...props} />
  ));
