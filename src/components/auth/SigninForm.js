import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import { Button, Form, FormGroup } from 'reactstrap'
import { InputGroup, InputGroupAddon } from 'reactstrap'

import UserIcon from '../svg/UserIcon'
import LockIcon from '../svg/LockIcon'


const SigninForm = props => {

  const renderAuthenticationError = () => {
    if (props.error) {
      return <div className="alert alert-danger">{props.error}</div>
    }

    return <div></div>
  }

  const { handleSubmit } = props

  return (
    <div>
      { renderAuthenticationError() }
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon>
              <UserIcon />
            </InputGroupAddon>
            <Field
              type="text"
              component="input"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete="off"
              className="form-control"
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroupAddon>
              <LockIcon />
            </InputGroupAddon>
            <Field
              type="password"
              component="input"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              className="form-control"
            />
          </InputGroup>
        </FormGroup>
        <Button
          className="submit-btn"
          color="primary">
          Log In
        </Button>
      </Form>
    </div>
  )
}

export default reduxForm({
  form: 'signin'
})(SigninForm)
