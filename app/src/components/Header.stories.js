import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Header from './Header';
import '../style.scss';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
};

const props = {
  onButtonClick: () => {},
};

storiesOf('Header', module)
  .addDecorator(story => (
    <div style={styles.container}>{story()}</div>
  ))
  .add('default', () => (
    <Header {...props} />
  ));
