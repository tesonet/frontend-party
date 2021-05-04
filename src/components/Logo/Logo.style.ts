import styled from 'styled-components'
import { LogoSize } from './Logo'

export const LogoWrapper = styled.div<{ size: LogoSize }>`
  width: ${({ size }) => (size === 'small' ? '115px' : '246px')};
`
