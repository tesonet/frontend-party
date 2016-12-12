import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FlatButton from './FlatButton';
import '../style.scss';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const props = {
  icon: 'ok',
  onClick: () => {},
};

storiesOf('FlatButton', module)
  .addDecorator(story => (
    <div style={styles.container}>{story()}</div>
  ))
  .add('with text', () => (
    <FlatButton {...props}>Submit</FlatButton>
  ))
  .add('with emoji', () => (
    <FlatButton {...props}>🍰</FlatButton>
  ));
