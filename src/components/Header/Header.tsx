import React from 'react'
import { useActions } from '../../hooks/useActions'
import { logoutUser } from '../../actions/auth'
import { HeaderWrapper } from './Header.style'
import Logo from 'components/Logo/Logo'
import { useHistory } from 'react-router'

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
      <button onClick={handleLogout}>Log out</button>
    </HeaderWrapper>
  )
}

export default Header
