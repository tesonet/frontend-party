import React from 'react'
import { useFormik, FormikErrors } from 'formik'
import { useActions } from '../../../hooks/useActions'
import { loadUser } from '../../../actions/auth'
import {
  Form,
  StyledInput,
  Button,
  ErrorContainer,
  IconContainer,
  InputWrapper,
} from './LoginForm.style'
import { useSelector } from 'react-redux'
import { Credentials } from 'types/server'
import UserIcon from '../../Icons/UserIcon'
import LockIcon from 'components/Icons/LockIcon'

interface InputProps {
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder: string
  error: string | undefined
  type: string
  icon?: JSX.Element
  id: string
}

const Input: React.FC<InputProps> = ({
  name,
  id,
  onChange,
  value,
  placeholder,
  error,
  type,
  icon,
}) => {
  return (
    <>
      <InputWrapper>
        <StyledInput
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          error={!!error}
          autoComplete="new-password"
        />
        <IconContainer>{icon}</IconContainer>
      </InputWrapper>
      <ErrorContainer error={!!error}>{error}</ErrorContainer>
    </>
  )
}

const LoginForm: React.FC = () => {
  const actions = useActions({ loadUser })
  const loading = useSelector(s => s.auth.loading)

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },

    validate: (values: Credentials) => {
      const errors: FormikErrors<Credentials> = {}
      if (!values.login) {
        errors.login = 'Please enter your username'
      }
      if (!values.password) {
        errors.password = 'Please enter your password'
      }

      return errors
    },

    onSubmit: values => {
      actions.loadUser(values.login, values.password)
      formik.resetForm()
    },
  })

  return (
    <Form onSubmit={formik.handleSubmit} autoComplete="off">
      <Input
        id="login"
        name="login"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.login}
        placeholder="Username"
        error={formik.errors.login}
        icon={<UserIcon />}
      />

      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Password"
        error={formik.errors.password}
        icon={<LockIcon />}
      />

      <Button type="submit" disabled={loading || !!formik.errors.login || !!formik.errors.password}>
        Login
      </Button>
    </Form>
  )
}

export default LoginForm
