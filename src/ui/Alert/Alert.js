import styled from 'styled-components'
import {variant, space} from 'styled-system'
import theme from '../styles/theme'

const type = variant({
  prop: 'variant',
  variants: {
    primary: {
      color: theme.palette.primary.contrastText,
      bg: theme.palette.primary.main,
      borderColor: theme.palette.primary.dark,
    },
    success: {
      color: theme.palette.success.contrastText,
      bg: theme.palette.success.light,
      borderColor: theme.palette.success.dark,
    },

    danger: {
      color: theme.palette.error.contrastText,
      bg: theme.palette.error.light,
      borderColor: theme.palette.error.dark,
    },
  },
})

const Alert = styled.div`
  ${theme.typography.body1}
  position: relative;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  ${type}
  ${space}
`

Alert.defaultProps = {
  variant: 'primary',
}

export default Alert
