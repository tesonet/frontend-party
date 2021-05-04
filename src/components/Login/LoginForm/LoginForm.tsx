import React from 'react'
import { useFormik, FormikErrors } from 'formik'
import { useActions } from '../../../hooks/useActions'
import { loadUser } from '../../../actions/auth'
import { Form, Input, Button, ErrorContainer } from './LoginForm.style'
import { useSelector } from 'react-redux'
import { Credentials } from 'types/server'

const LoginForm = () => {
  const actions = useActions({ loadUser })
  const error = useSelector(s => s.auth.error)
  const loading = useSelector(s => s.auth.loading)

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },

    validate: (values: Credentials) => {
      const errors: FormikErrors<Credentials> = {}
      if (!values.login) {
        errors.login = 'Required'
      } else if (values.login.length > 15) {
        errors.login = 'Must be 15 characters or less'
      }

      if (!values.password) {
        errors.password = 'Required'
      } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less'
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
      {formik.errors.login ? <div>{formik.errors.login}</div> : null}

      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Password"
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <ErrorContainer>{error && <div>Login failed</div>}</ErrorContainer>

      <Button type="submit" disabled={loading}>
        Login
      </Button>
    </Form>
  )
}

export default LoginForm
