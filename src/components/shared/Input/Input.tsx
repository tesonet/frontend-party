import React from 'react'
import { createUseStyles } from 'react-jss'
import styleConsts from '../../../styles'

const makeStyles = createUseStyles({
  inputContainer: {
    position: 'relative',
    display: 'flex',

    '& .input': {
      width: '100%',
      padding: '18px 50px',
      border: '2px solid transparent',
      borderRadius: 5,
      color: styleConsts.mainTextColor,
      transition: 'border 0.2s ease-in-out',

      '&:focus': {
        outline: 'none',
      },
      '&.required': {
        border: '2px solid red',
      },
    },
    '& .icon': {
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      left: 25,
    },
    '& small': {
      color: 'red',
      position: 'absolute',
      bottom: -18,
      left: 0,
    },
  },
})
function Input(props) {
  const styles = makeStyles()
  const handleChange = e => {
    if (props.onChange) {
      props.onChange(e)
    }
  }
  return (
    <div className={props.className}>
      <div className={styles.inputContainer}>
        <input
          className={props.required ? 'input required' : 'input'}
          autoComplete="new-password"
          type={props.type}
          onChange={handleChange}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
        <div className="icon">{props.icon}</div>
        {props.required && <small>This field is required!</small>}
      </div>
    </div>
  )
}

export default Input
