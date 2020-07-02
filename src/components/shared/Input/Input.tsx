import React, { ChangeEvent, ReactSVG } from 'react'
import inputStyles from './Input.style'
export interface InputProps {
  icon: any
  type: 'text' | 'password'
  className: string
  placeholder: string
  required?: boolean
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
function Input(props: InputProps) {
  const styles =inputStyles()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
