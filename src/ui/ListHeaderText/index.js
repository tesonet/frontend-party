import styled from 'styled-components'
import Box from '../Box'
import theme from '../styles/theme'

const ListHeaderText = styled(Box)`
  font-family: ${theme.typography.fontFamily};
  font-size: 0.9rem;
  color: ${theme.text.secondary};
  letter-spacing: 0.4px;
  text-transform: uppercase;
`

export default ListHeaderText
