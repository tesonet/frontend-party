import React from 'react'
import { logOut } from '../../../store/auth_actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LogoutIcon from '../../../../assets/icons/logout.svg'
import { warningButton } from '../../../styles/bigButton'
import logoutButtonStyle from './LogoutButton.style'
function LogoutButton(props: { bigButton?: boolean }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const styles = { ...logoutButtonStyle(), ...warningButton() }
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
