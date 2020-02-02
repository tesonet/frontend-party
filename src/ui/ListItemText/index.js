import styled from 'styled-components'
import Box from '../Box'
import theme from '../styles/theme'

const ListItemText = styled(Box)`
  font-family: ${theme.typography.fontFamily};
  font-size: 1rem;
  color: ${theme.text.secondary};
  letter-spacing: 0.4px;
`

export default ListItemText
