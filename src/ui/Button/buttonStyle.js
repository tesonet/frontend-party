import {variant} from 'styled-system'
import theme from '../styles/theme'

export const size = variant({
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

export const type = variant({
  prop: 'variant',
  variants: {
    contained: {
      bg: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        bg: theme.palette.primary.dark,
      },
    },
    text: {
      bg: 'transparent',
      color: theme.text.primary,
      '&:hover': {
        bg: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
  },
})

export default {type, size}
