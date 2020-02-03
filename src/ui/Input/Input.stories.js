import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import Input from './Input'
import Box from '../Box'

storiesOf('Input', module)
  .addDecorator(story => <Box p={5}>{story()}</Box>)
  .add('standard', () => {
    const [value, setValue] = useState('')

    return (
      <Input
        name="username"
        label="Username"
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}
      />
    )
  })
  .add('with icon', () => {
    const [value, setValue] = useState('')

    return (
      <Input
        name="username"
        startIcon="user"
        label="Username"
        value={value}
        onChange={e => {
          setValue(e.target.value)
        }}
      />
    )
  })
  .add('disabled', () => {
    const [value, setValue] = useState('')

    return (
      <Input
        name="username"
        startIcon="user"
        label="Username"
        value={value}
        disabled
        onChange={e => {
          setValue(e.target.value)
        }}
      />
    )
  })
