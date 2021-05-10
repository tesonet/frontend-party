import React from 'react'
import { useFormik, FormikErrors } from 'formik'
import {
  Form,
  StyledInput,
  Button,
  ErrorContainer,
  IconContainer,
  InputWrapper,
} from './LoginForm.style'
import { Credentials } from 'types/auth'
import UserIcon from 'components/Icons/UserIcon'
import LockIcon from 'components/Icons/LockIcon'
import { AnyAction, Dispatch } from 'redux'

interface LoginFormProps {
  loading: boolean
  loadUser: (username: string, password: string) => (dispatch: Dispatch<AnyAction>) => void
}

interface InputProps {
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder: string
  error: string | undefined | false
  type: string
  icon?: JSX.Element
  id: string
  onBlur: (e: React.FocusEvent<any>) => void
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
  onBlur,
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
          onBlur={onBlur}
        />
        <IconContainer>{icon}</IconContainer>
      </InputWrapper>
      <ErrorContainer error={!!error}>{error}</ErrorContainer>
    </>
  )
}

const LoginForm: React.FC<LoginFormProps> = ({ loading, loadUser }) => {
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
      loadUser(values.login, values.password)
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
        error={formik.touched.login && formik.errors.login}
        icon={<UserIcon />}
        onBlur={formik.handleBlur}
      />

      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Password"
        error={formik.touched.password && formik.errors.password}
        icon={<LockIcon />}
        onBlur={formik.handleBlur}
      />

      <Button type="submit" disabled={loading || !!formik.errors.login || !!formik.errors.password}>
        Login
      </Button>
    </Form>
  )
}

export default LoginForm
