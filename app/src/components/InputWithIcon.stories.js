import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {
  FormGroup,
} from 'react-bootstrap';
import InputWithIcon from './InputWithIcon';
import '../style.scss';

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

storiesOf('InputWithIcon', module)
  .addDecorator(story => (
    <div style={styles.container}>
      <FormGroup
        bsSize="lg"
      >
        <div style={styles.container}>{story()}</div>
      </FormGroup>
    </div>
  ))
  .add('with text placeholder', () => {
    const props = {
      icon: 'font',
      type: 'text',
      placeholder: 'Hi, friend',
    };
    return <InputWithIcon {...props} />;
  })
  .add('with icon placeholder', () => {
    const props = {
      icon: 'music',
      type: 'text',
      placeholder: 'La la la 🎵 🎵 🎵',
    };
    return <InputWithIcon {...props} />;
  });
