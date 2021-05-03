import React from 'react'
import { useActions } from '../../hooks/useActions'
import { logoutUser } from '../../actions/auth'
import { HeaderWrapper } from './Header.style'
import Logo from 'components/Logo/Logo'
import { useHistory } from 'react-router'

const Header: React.FC = () => {
  const actions = useActions({ logoutUser })
  const history = useHistory()
  const handleLogout = () => {
    actions.logoutUser()
    history.push('/')
  }
  return (
    <HeaderWrapper>
      <Logo />
      <button onClick={handleLogout}>Log out</button>
    </HeaderWrapper>
  )
}

export default Header
