import React from 'react'
import { HeaderWrapper } from './Header.style'
import Logo from 'components/Logo/Logo'
import Button from 'components/core/Button/Button'
import LogoutIcon from 'components/Icons/LogoutIcon'

interface HeaderProps {
  handleLogout: () => void
  fixed?: boolean
}

const Header: React.FC<HeaderProps> = ({ fixed = false, handleLogout }) => {
  return (
    <HeaderWrapper fixed={fixed}>
      <Logo />
      <Button title="Log out" onClick={handleLogout} icon={<LogoutIcon />} />
    </HeaderWrapper>
  )
}

export default Header
