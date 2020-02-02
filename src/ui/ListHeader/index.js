import styled from 'styled-components'
import Box from '../Box'
import theme from '../styles/theme'

const ListHeader = styled(Box)`
  display: flex;
  border-bottom: 1px solid ${theme.palette.grey['300']};
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.palette.grey['100']};
`

export default ListHeader
