import React from 'react'
import { logOut } from '../../../store/auth_actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LogoutIcon from '../../../../assets/icons/logout.svg'
import { createUseStyles } from 'react-jss'
import { warningButton } from '../../../styles/bigButton'
const makeStyles = createUseStyles({
  logoutContainer: {
    display: 'flex',
    alignItems: 'center',
    '& .btn': {
      border: 'none',
      backgroundColor: 'transparent',
    },
    '& .icon': {
      display: 'flex',
    },
    '&:hover .icon': {
      cursor: 'pointer',
      '& svg path': {
        fill: '#99cc33',
      },
    },
    '&:hover .btn': {
      color: '#99cc33',
      cursor: 'pointer',
    },
  },
  fillWhite: {
    '& svg path': {
      fill: '#fff',
    },
  },
})
function LogoutButton(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const styles = { ...makeStyles(), ...warningButton() }
  const handleLogout = () => {
    dispatch(logOut())
    history.push('/login')
  }
  return (
    <div className={props.bigButton ? styles.button : styles.logoutContainer}>
      {!props.bigButton && (
        <div className="icon">
          <LogoutIcon />
        </div>
      )}
      <div className="buttonContainer">
        <button className="btn" onClick={handleLogout}>
          <span className={`mr ${styles.fillWhite}`}>
            {props.bigButton && <LogoutIcon />}
          </span>
          Logout
        </button>
      </div>
    </div>
  )
}

export default LogoutButton
