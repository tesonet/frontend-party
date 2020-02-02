import React from 'react'
import {storiesOf} from '@storybook/react'
import Box from '../Box'
import Popover from '.'

const text = 'Popover text'

storiesOf('Popover', module)
  .addDecorator(story => <Box p={5}>{story()}</Box>)
  .add('info', () => {
    return (
      <Box display="flex" alignItems="center" mb={2}>
        <Popover variant="info" size="small" mr={2}>
          {text}
        </Popover>
        <Popover variant="info" size="medium" mr={2}>
          {text}
        </Popover>
        <Popover variant="info" size="large">
          {text}
        </Popover>
      </Box>
    )
  })
  .add('danger', () => {
    return (
      <Box display="flex" alignItems="center" mb={2}>
        <Popover variant="danger" size="small" mr={2}>
          {text}
        </Popover>
        <Popover variant="danger" size="medium" mr={2}>
          {text}
        </Popover>
        <Popover variant="danger" size="large">
          {text}
        </Popover>
      </Box>
    )
  })
