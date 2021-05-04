import React from 'react'
import { IconProps } from '../../types/icon'
import { colors } from '../../styles/colors'

const LogoutIcon: React.FC<IconProps> = ({ color = colors.logoColor }) => (
  <svg width={16} height={16} viewBox="0 0 16 16">
    <path
      id="Combined_shape_7742"
      data-name="Combined shape 7742"
      d="M7,18a.945.945,0,0,1-1-1V14H8v2h7V4H8V6H6V3A.945.945,0,0,1,7,2h9a.945.945,0,0,1,1,1V17a.945.945,0,0,1-1,1ZM1,10,5,6V9h6v2H5v3Z"
      transform="translate(-1 -2)"
      fill={color}
    />
  </svg>
)

export default LogoutIcon
