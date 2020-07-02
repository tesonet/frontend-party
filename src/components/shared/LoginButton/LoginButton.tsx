import React from 'react'
import { successButton } from '../../../styles/bigButton'

function LoginButton(props: {disabled?: boolean}) {
  const styles = successButton()
  return (
    <div className={styles.button}>
      <button type="submit" disabled={props.disabled}>
        Login
      </button>
    </div>
  )
}

export default LoginButton
