import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import logoImage from '../../../assets/logo-dark.png'
import Button from '../../../ui/Button'
import AppBar from '../../../ui/AppBar'
import {logoutUser} from '../../../modules/auth/actions'
import {getIsAuthenticated} from '../../../modules/auth/selectors'

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  cursor: pointer;
`

const DashboardBar = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(getIsAuthenticated)
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <AppBar>
      <Logo src={logoImage} onClick={scrollToTop} />
      {isAuthenticated && (
        <Button
          variant="text"
          startIcon="logout"
          onClick={() => {
            dispatch(logoutUser())
          }}>
          Logout
        </Button>
      )}
    </AppBar>
  )
}

export default DashboardBar
