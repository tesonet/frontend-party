import React from 'react'
import {storiesOf} from '@storybook/react'
import Box from '../Box'
import Alert from '.'

const text = 'Alert dummy text'

storiesOf('Alert', module)
  .addDecorator(story => <Box p={5}>{story()}</Box>)
  .add('variants', () => {
    return (
      <>
        <Box display="flex" alignItems="center" mb={2}>
          <Alert variant="success" mr={2}>
            {text}
          </Alert>
          <Alert variant="danger" mr={2}>
            {text}
          </Alert>
        </Box>
      </>
    )
  })
