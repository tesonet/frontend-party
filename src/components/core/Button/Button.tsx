import React from 'react'
import { ButtonWrapper } from './Button.style'

interface ButtonProps {
  title: string
  onClick?: () => void
  icon?: any
  big?: boolean
}

const Button: React.FC<ButtonProps> = ({ title, onClick, icon, big }) => {
  return (
    <ButtonWrapper onClick={onClick} big={big}>
      <div>{icon}</div>
      <div>{title}</div>
    </ButtonWrapper>
  )
}

export default Button
