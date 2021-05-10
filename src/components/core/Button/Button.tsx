import React from 'react'
import { ButtonWrapper } from './Button.style'

interface ButtonProps {
  title: string
  onClick?: () => void
  icon?: JSX.Element
  big?: any
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
