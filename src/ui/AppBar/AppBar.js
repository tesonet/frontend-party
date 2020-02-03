import styled from 'styled-components'
import theme from '../styles/theme'

const AppBar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.palette.common.white};
  border-bottom: 1px solid ${theme.palette.grey['300']};
`

export default AppBar
