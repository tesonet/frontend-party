import React, {useState, useRef, createRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from '../../../modules/auth/actions'
import {getIsLoggingIn, getErrorMessage} from '../../../modules/auth/selectors'
import {createValidator, required, minLength} from '../../../utils/validation'
import Input from '../../../ui/Input'
import Button from '../../../ui/Button'
import Alert from '../../../ui/Alert'

const config = [
  {
    type: 'text',
    name: 'username',
    label: 'Username',
    icon: 'user',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    icon: 'lock',
  },
]

const validate = createValidator({
  username: [required, minLength(3)],
  password: required,
})

// TODO: reuse hooks logic

export default () => {
  const dispatch = useDispatch()
  const isLoggingIn = useSelector(getIsLoggingIn)
  const errorMessage = useSelector(getErrorMessage)

  const inputsRef = useRef(config.map(() => createRef()))

  const [inputs, setInputState] = useState({
    username: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = event => {
    const {target} = event
    const {type, name} = target
    const value = type === 'checkbox' ? target.checked : target.value

    setInputState(prevState => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const handleFormSubmit = event => {
    const inputErrors = validate(inputs) || {}
    const invalidInputNames = Object.keys(inputErrors)

    if (invalidInputNames.length) {
      setErrors(inputErrors)
      // focus 1st invalid field
      try {
        const invalidInputName = invalidInputNames[0]

        inputsRef.current.forEach(ref => {
          if (ref.current.name === invalidInputName) {
            ref.current.focus()
          }
        })
      } catch (error) {
        console.error(error)
      }
    } else {
      setErrors({})
      dispatch(loginUser(inputs))
    }

    event.preventDefault()
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {config.map((input, index) => {
        const {name} = input
        return (
          <Input
            key={name}
            ref={inputsRef.current[index]}
            type={input.type}
            name={input.name}
            label={input.label}
            value={inputs[name]}
            onChange={handleInputChange}
            startIcon={input.icon}
            disabled={isLoggingIn}
            error={!!errors[name]}
            helperText={errors[name]}
            mb={3}
          />
        )
      })}
      {!!errorMessage && (
        <Alert variant="danger" mb={3}>
          {errorMessage}
        </Alert>
      )}
      <Button
        variant="contained"
        size="medium"
        type="submit"
        loading={isLoggingIn}
        fullWidth>
        Log In
      </Button>
    </form>
  )
}
