import React from 'react'
import { LogoWrapper } from './Logo.style'
import LogoIcon from '../Icons/LogoIcon'
import { colors } from '../../styles/colors'

export type LogoSize = 'small' | 'large'

interface LogoProps {
  textColor?: string
  dotColor?: string
  size?: LogoSize
}

const Logo: React.FC<LogoProps> = ({
  textColor = colors.logoColor,
  dotColor = colors.limeade,
  size = 'small',
}) => {
  return (
    <LogoWrapper size={size}>
      <LogoIcon textColor={textColor} dotColor={dotColor} />
    </LogoWrapper>
  )
}

export default Logo
