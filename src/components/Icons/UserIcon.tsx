import React from 'react'
import { colors } from 'styles/colors'
import { IconProps } from 'types/icon'

const UserIcon: React.FC<IconProps> = ({ color = colors.iconGray }) => (
  <>
    <svg width={14} height={16} viewBox="0 0 14 16">
      <path
        id="Combined_shape_7641"
        data-name="Combined shape 7641"
        d="M1,17V14a3.86,3.86,0,0,1,2.964-3.575,5.961,5.961,0,0,0,8.072,0A3.86,3.86,0,0,1,15,14v3ZM4,6V5a4,4,0,1,1,8,0V6A4,4,0,0,1,4,6Z"
        transform="translate(-1 -1)"
        fill={color}
      />
    </svg>
  </>
)

export default UserIcon
