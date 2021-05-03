import styled from 'styled-components'
import { LogoSize } from './Logo'

export const LogoWrapper = styled.div<{ size: LogoSize }>`
  height: ${({ size }) => (size === 'small' ? '30px' : '60px')};
`
