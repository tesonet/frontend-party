import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import Background from '../../../assets/img/login-page-background.png'
import UsernameIcon from '../../../assets/icons/username.svg'
import LockIcon from '../../../assets/icons/lock.svg'
import logo from '../../../assets/logo/logo_testio.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import { logIn } from '../../store/auth_actions'
import { useHistory } from 'react-router-dom'
import { requestServerList } from '../../service/auth_service'
import LoginButton from '../shared/LoginButton/LoginButton'
import Input from '../shared/Input/Input'
import LogoutButton from '../shared/LogoutButton/LogoutButton'
import { primaryButton } from '../../styles/bigButton'

const makeStyles = createUseStyles({
  logoutButtonStyle: {
    width: '100%',
    border: 'none',
    padding: '18px 0',
    borderRadius: 5,
    backgroundColor: '#83D605',
    color: 'white',
    transition: 'background-color 0.2s ease-in',
    '&:hover': {
      backgroundColor: '#86b300',
      cursor: 'pointer',
    },
    '&:disabled': {
      backgroundColor: '#AFE45D',
      pointerEvents: 'none',
    },
  },
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
    '& .logo': {
      marginBottom: 70,
    },
  },
  form: {
    width: '40%',
    minWidth: 300,
    maxWidth: 400,
  },
  error: {
    color: 'red',
  },
  logoutWrapper: {
    color: '#fff',
    width: '40%',
    minWidth: 300,
    maxWidth: 400,
    textAlign: 'center',
    '& .loggedInText': {
      width: '100%',
      fontSize: 20,
    },
  },
  '@media screen and (max-width: 500px)': {
    form: {
      width: 'auto',
    },
    logoutWrapper: {
      width: 'auto',
    },
  },
})
function Login() {
  const style = { ...makeStyles(), ...primaryButton() }
  const dispatch = useDispatch()
  const history = useHistory()
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const error = useSelector(state => state.error)
  const loading = useSelector(state => state.loading)
  const loggedIn = useSelector(state => state.loggedIn)
  const valid = username && password
  const navigateToServers = async () => {
    const serversResponse = await requestServerList()
    history.push('/servers', serversResponse.data)
  }
  const handleLogin = async e => {
    e.preventDefault()
    const status: string = await logIn(username, password, dispatch)
    if (status === 'success') {
      navigateToServers()
    }
  }
  const errorMessage = (
    <div className={style.error}>Incorrect username or password</div>
  )

  return (
    <div className={style.wrapper}>
      <div className={style.background}></div>
      <div className={style.formContainer}>
        <div className="logo">
          <img src={logo} />
        </div>
        {error && errorMessage}
        {!loggedIn && (
          <form onSubmit={handleLogin} className={style.form}>
            <Input
              disabled={loading}
              className="mb"
              required={!username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
              icon={<UsernameIcon />}
              type="text"
            />
            <Input
              disabled={loading}
              className="mb"
              required={!password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              icon={<LockIcon />}
              type="password"
            />
            <LoginButton disabled={loading || !valid} />
          </form>
        )}
        {loggedIn && (
          <div className={style.logoutWrapper}>
            <div className="loggedInText mb">You are already logged in :)</div>
            <div className={`${style.button} mb`}>
              <button onClick={() => navigateToServers()}>
                Browse servers!
              </button>
            </div>
            <div className="mb">or</div>
            <LogoutButton bigButton />
          </div>
        )}
      </div>
    </div>
  )
}

export default connect()(Login)
