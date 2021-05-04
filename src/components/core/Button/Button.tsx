import React from 'react'
import { ButtonWrapper } from './Button.style'

interface ButtonProps {
  title: string
  onClick?: () => void
  icon?: any
}

const Button: React.FC<ButtonProps> = ({ title, onClick, icon }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <div>{icon}</div>
      <div>{title}</div>
    </ButtonWrapper>
  )
}

export default Button
