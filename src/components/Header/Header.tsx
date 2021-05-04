import React from 'react'
import { useActions } from '../../hooks/useActions'
import { logoutUser } from '../../actions/auth'
import { HeaderWrapper } from './Header.style'
import Logo from 'components/Logo/Logo'
import { useHistory } from 'react-router'
import Button from '../core/Button/Button'
import LogoutIcon from 'components/Icons/LogoutIcon'

interface HeaderProps {
  fixed?: boolean
}

const Header: React.FC<HeaderProps> = ({ fixed = false }) => {
  const actions = useActions({ logoutUser })
  const history = useHistory()
  const handleLogout = () => {
    actions.logoutUser()
    history.push('/')
  }
  return (
    <HeaderWrapper fixed={fixed}>
      <Logo />
      <Button title="Log out" onClick={handleLogout} icon={<LogoutIcon />} />
    </HeaderWrapper>
  )
}

export default Header
