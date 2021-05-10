import React from 'react'
import LoginForm from './LoginForm/LoginForm'
import { useHistory } from 'react-router-dom'
import { isAuthenticated } from 'libs/auth'
import { Content, LoginWrapper, Overlay } from './Login.style'
import backgroundImage from 'assets/images/surfer.jpg'
import Logo from 'components/Logo/Logo'
import { colors } from 'styles/colors'
import { Message } from 'components/core/Message/Message'
import { useActions } from 'hooks/useActions'
import { loadUser } from '../../actions/auth'
import { useSelector } from 'react-redux'

const Login: React.FC = () => {
  const history = useHistory()
  const actions = useActions({ loadUser })
  const loading = useSelector(s => s.auth.loading)

  if (isAuthenticated()) history.push('/')

  return (
    <LoginWrapper backgroundImage={backgroundImage}>
      <Message />
      <Overlay />
      <Content>
        <Logo textColor={colors.white} size="large" />
        <LoginForm loadUser={actions.loadUser} loading={loading} />
      </Content>
    </LoginWrapper>
  )
}

export default Login
