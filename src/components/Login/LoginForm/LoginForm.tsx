import React from 'react'
import { useFormik } from 'formik'
import { useActions } from '../../../hooks/useActions'
import { loadUser } from '../../../actions/auth'
import { Form, Input, Button, ErrorContainer } from './LoginForm.style'
import { useSelector } from 'react-redux'

const LoginForm = () => {
  const actions = useActions({ loadUser })
  const error = useSelector(s => s.auth.error)

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: values => {
      actions.loadUser(values.login, values.password)
      formik.resetForm()
    },
  })
  return (
    <Form onSubmit={formik.handleSubmit} autoComplete="off">
      <input type="hidden" value="something" />
      <Input
        id="login"
        name="login"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.login}
        autoComplete="off"
        placeholder="Username"
      />
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Password"
      />
      <ErrorContainer>{error && <div>Login failed</div>}</ErrorContainer>

      <Button type="submit">Login</Button>
    </Form>
  )
}

export default LoginForm
