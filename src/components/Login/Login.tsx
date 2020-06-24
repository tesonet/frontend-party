import React from 'react'
import { createUseStyles } from 'react-jss'
const makeStyles = createUseStyles({
  wrapper: {
    color: 'red',
  },
})
function Login() {
  const style = makeStyles()
  return <div className={style.wrapper}>Login component!</div>
}

export default Login
