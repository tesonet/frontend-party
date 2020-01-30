import React from 'react'
import {storiesOf} from '@storybook/react'
import Box from '../Box'
import Button from '.'

const text = 'Log In'

storiesOf('Button', module)
  .addDecorator(story => <Box p={5}>{story()}</Box>)
  .add('variant contained', () => {
    return (
      <>
        <Box display="flex" alignItems="center" mb={2}>
          <Button variant="contained" size="small" mr={2}>
            {text}
          </Button>
          <Button variant="contained" size="medium" mr={2}>
            {text}
          </Button>
          <Button variant="contained" size="large">
            {text}
          </Button>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <Button variant="contained" size="small" disabled mr={2}>
            {text}
          </Button>
          <Button variant="contained" size="medium" disabled mr={2}>
            {text}
          </Button>
          <Button variant="contained" size="large" disabled>
            {text}
          </Button>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <Button variant="contained" size="small" startIcon="user" mr={2}>
            {text}
          </Button>
          <Button variant="contained" size="medium" startIcon="user" mr={2}>
            {text}
          </Button>
          <Button variant="contained" size="large" startIcon="user">
            {text}
          </Button>
        </Box>
        <Box display="flex" alignItems="center">
          <Button variant="contained" size="small" loading mr={2}>
            {text}
          </Button>
          <Button variant="contained" size="medium" loading mr={2}>
            {text}
          </Button>
          <Button variant="contained" size="large" loading>
            {text}
          </Button>
        </Box>
      </>
    )
  })
  .add('variant text', () => {
    return (
      <>
        <Box display="flex" alignItems="center" mb={2}>
          <Button variant="text" size="small" mr={2}>
            {text}
          </Button>
          <Button variant="text" size="medium" mr={2}>
            {text}
          </Button>
          <Button variant="text" size="large">
            {text}
          </Button>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <Button variant="text" size="small" disabled mr={2}>
            {text}
          </Button>
          <Button variant="text" size="medium" disabled mr={2}>
            {text}
          </Button>
          <Button variant="text" size="large" disabled>
            {text}
          </Button>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <Button variant="text" size="small" startIcon="logout" mr={2}>
            {text}
          </Button>
          <Button variant="text" size="medium" startIcon="logout" mr={2}>
            {text}
          </Button>
          <Button variant="text" size="large" startIcon="logout">
            {text}
          </Button>
        </Box>
      </>
    )
  })
