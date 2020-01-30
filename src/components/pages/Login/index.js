import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import LoginForm from '../../common/LoginForm'
import {getIsAuthenticated} from '../../../modules/auth/selectors'
import backgroundImage from '../../../assets/bg.jpg'
import logoImage from '../../../assets/logo-light.png'

const LoginPage = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImage}) white no-repeat 30% 50%;
  background-size: cover;
`

const LoginContainer = styled.div`
  width: 100%;
  max-width: 360px;
`

const Logo = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto 70px;
`

export default () => {
  const isAuthenticated = useSelector(getIsAuthenticated)

  if (isAuthenticated) {
    return <Redirect to={{pathname: '/'}} />
  }

  return (
    <LoginPage>
      <LoginContainer>
        <Logo src={logoImage} />
        <LoginForm />
      </LoginContainer>
    </LoginPage>
  )
}
