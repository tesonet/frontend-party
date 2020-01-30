import styled from 'styled-components'
import {space, layout, typography, color, flexbox} from 'styled-system'

const Box = styled.div`
  box-sizing: border-box;
  margin: 0;
  ${flexbox}
  ${space}
  ${layout}
  ${typography}
  ${color}
`

export default Box
