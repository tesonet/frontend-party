import React from 'react'
import { useActions } from '../../../hooks/useActions'
import { loadUser } from '../../../actions/auth'

const Form: React.FC = () => {
  const actions = useActions({ loadUser })
  const handleLogin = (e: any) => {
    e.preventDefault()
    actions.loadUser()
  }
  return (
    <form onSubmit={e => handleLogin(e)}>
      <input />
      <input />
      <button type="submit">Login</button>
    </form>
  )
}

export default Form
