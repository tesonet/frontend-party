import React from 'react'
import { IconProps } from 'types/icon'
import { colors } from '../../styles/colors'

const CloseIcon: React.FC<IconProps> = ({ color = colors.pinkGlamour }) => (
  <svg viewBox="0 0 49.75 49.75" width="1rem" height="1rem">
    <g>
      <line
        x1={3.5}
        y1={3.5}
        x2={46.25}
        y2={46.25}
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={7}
      />
      <line
        x1={3.5}
        y1={46.25}
        x2={46.25}
        y2={3.5}
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={7}
      />
    </g>
  </svg>
)

export default CloseIcon
