import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import Background from '../../../assets/img/login-page-background.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import { logIn, logOut } from '../../store/auth_actions'

const makeStyles = createUseStyles({
  wrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0b0f27',
    position: 'relative',
    zIndex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    background: [`url(${Background})`, 'no-repeat', 'center'],
    backgroundSize: 'cover',
    opacity: 0.3,
    zIndex: -1,
  },
  formContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
  },
})
function Login(props) {
  const style = makeStyles()
  const dispatch = useDispatch()
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const error = useSelector((state) => state.error)
  const loading = useSelector((state) => state.loading)
  const loggedIn = useSelector((state) => state.loggedIn)
  const errorMessage = (
    <div className={style.error}>Incorrect username or password</div>
  )
  const logoutButton = (
    <div>
      <button
        type="button"
        disabled={loading}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  )
  const loginButton = (
    <div>
      <button
        type="button"
        onClick={() => dispatch(logIn(username, password))}
        disabled={loading}
      >
        Login
      </button>
    </div>
  )

  return (
    <div className={style.wrapper}>
      <div className={style.background}></div>
      <div className={style.formContainer}>
        {error && errorMessage}
        <form>
          <div>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          {loggedIn && logoutButton}
          {!loggedIn && loginButton}
        </form>
      </div>
    </div>
  )
}

export default connect()(Login)
