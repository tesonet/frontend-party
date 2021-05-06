import React from 'react'
import { colors } from 'styles/colors'
import { IconProps } from 'types/icon'

const LockIcon: React.FC<IconProps> = ({ color = colors.iconGray }) => (
  <svg width={14} height={18} viewBox="0 0 14 18">
    <path
      id="Combined_shape_7642"
      data-name="Combined shape 7642"
      d="M14,19H2a.947.947,0,0,1-1-1V9A.947.947,0,0,1,2,8H4V5a4,4,0,1,1,8,0V8h2a.947.947,0,0,1,1,1v9A.947.947,0,0,1,14,19ZM8,11a1,1,0,0,0-1,1v3a1,1,0,1,0,2,0V12A1,1,0,0,0,8,11ZM8,3A2,2,0,0,0,6,5V8h4V5A2,2,0,0,0,8,3Z"
      transform="translate(-1 -1)"
      fill={color}
    />
  </svg>
)

export default LockIcon
