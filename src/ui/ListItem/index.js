import styled from 'styled-components'
import Box from '../Box'
import theme from '../styles/theme'

const ListItem = styled(Box)`
  display: flex;
  padding: 20px 15px;
  border-bottom: 1px solid ${theme.palette.grey['300']};
  justify-content: space-between;
  align-items: center;
`

export default ListItem
