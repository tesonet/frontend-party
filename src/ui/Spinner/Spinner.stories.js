import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, color} from '@storybook/addon-knobs'
import Box from '../Box'
import Spinner from '.'

storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Box p={5}>{story()}</Box>)
  .add('primary', () => {
    return (
      <Box display="flex" alignItems="center" mb={2}>
        <Spinner size="small" mr={2} />
        <Spinner size="medium" mr={2} />
        <Spinner size="large" />
      </Box>
    )
  })
  .add('with color picker', () => {
    return (
      <Box display="flex" alignItems="center" mb={2}>
        <Spinner
          size="small"
          mr={2}
          color={color('fill', '#000', 'GROUP-ID1')}
        />
        <Spinner
          size="medium"
          mr={2}
          color={color('fill', '#000', 'GROUP-ID1')}
        />
        <Spinner size="large" color={color('fill', '#000', 'GROUP-ID1')} />
      </Box>
    )
  })
