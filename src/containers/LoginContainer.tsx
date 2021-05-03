import React from 'react'
import BaseContainer from './BaseContainer'
import { useSelector } from 'react-redux'
import Login from '../components/Login/Login'

const LoginContainer: React.FC = () => {
  const loading = useSelector(s => s.auth.loading)
  return <BaseContainer content={<Login />} loading={loading} />
}
export default LoginContainer
