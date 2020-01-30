import React from 'react'
import PropTypes from 'prop-types'
import {variant as styledVariant} from 'styled-system'
import styled from 'styled-components'
import theme from '../styles/theme'

const styledSize = styledVariant({
  prop: 'size',
  variants: {
    small: {
      fontSize: '0.8rem',
      px: 2,
      py: 2,
    },
    medium: {
      fontSize: '1rem',
      px: 3,
      py: 3,
    },
    large: {
      fontSize: '1.3rem',
      px: 3,
      py: 3,
    },
  },
})

const styledType = styledVariant({
  prop: 'variant',
  variants: {
    info: {
      bg: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },

    danger: {
      bg: theme.palette.error.light,
      color: theme.palette.error.contrastText,
    },
  },
})

const styledTriangleType = styledVariant({
  prop: 'variant',
  variants: {
    info: {
      borderRight: `6px solid ${theme.palette.primary.main}`,
    },

    danger: {
      borderRight: `6px solid ${theme.palette.error.light}`,
    },
  },
})

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  position: absolute;
  top: 50%;
  left: -5px;
  margin-top: -6px;
  ${styledTriangleType}
`

const PopoverBase = styled.div`
  position: relative;
  border-radius: 5px;
  ${styledType}
  ${styledSize}
`

const Popover = ({children, variant, size, ...other}) => {
  return (
    <PopoverBase variant={variant} size={size} {...other}>
      {children}
      <Triangle variant={variant} />
    </PopoverBase>
  )
}

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
}

Popover.defaultProps = {
  variant: 'info',
  size: 'medium',
}

export default Popover
