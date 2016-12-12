import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FormMessage from './FormMessage';
import '../style.scss';

const errorProps = { type: 'error' };
const successProps = { type: 'success' };

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

storiesOf('FormMessage', module)
  .addDecorator(story => (
    <div style={styles.container}>{story()}</div>
  ))
  .add('error', () => (
    <FormMessage {...errorProps}>There was an error!</FormMessage>
  ))
  .add('success', () => (
    <FormMessage {...successProps}>All good! 🍪</FormMessage>
  ));
