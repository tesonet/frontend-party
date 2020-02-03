import React from 'react'
import {storiesOf} from '@storybook/react'
import Box from '../Box'
import Alert from '.'

const text = 'Alert dummy text'

storiesOf('Alert', module)
  .addDecorator(story => <Box p={5}>{story()}</Box>)
  .add('primary', () => {
    return <Alert variant="primary">{text}</Alert>
  })
  .add('success', () => {
    return <Alert variant="success">{text}</Alert>
  })
  .add('danger', () => {
    return <Alert variant="danger">{text}</Alert>
  })
