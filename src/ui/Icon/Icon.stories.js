import React from 'react'
import {storiesOf} from '@storybook/react'
import {withKnobs, color} from '@storybook/addon-knobs'
import Box from '../Box'
import Icon from '.'

storiesOf('Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Box p={5}>{story()}</Box>)
  .add('variants', () => {
    return (
      <>
        <Box display="flex" alignItems="center" mb={2}>
          {Icon.validIconNames.map(name => {
            return (
              <Icon
                key={name}
                name={name}
                size={40}
                color={color('fill', '#000', 'GROUP-ID1')}
              />
            )
          })}
        </Box>
      </>
    )
  })
