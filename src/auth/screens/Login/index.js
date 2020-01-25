import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

import {loginUser} from '../../actions'

export default () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [state, setState] = useState({
    username: '',
    password: '',
    history,
  })

  const handleFormSubmit = e => {
    dispatch(loginUser(state))
    e.preventDefault()
  }

  const handleInputChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="username"
        value={state.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleInputChange}
      />
      <button type="submit">Log In</button>
    </form>
  )
}
