import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  FormGroup,
  FormControl,
  Button,
  Glyphicon,
  HelpBlock,
} from 'react-bootstrap';
import { validateLoginForm } from '../utils/validateForm';
import './LoginForm.scss';

export class LoginForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  getValidationState = (touched, error) => {
    if (!touched) return null;
    return error ? 'error' : 'success';
  };

  renderFieldComponent = ({
    input,
    name,
    icon,
    type,
    placeholder,
    meta: { touched, error },
    ...custom
  }) => (
    <FormGroup
      controlId={name}
      bsSize="lg"
      validationState={this.getValidationState(touched, error)}
    >
      <div className={icon && 'input-with-icon'}>
        {icon && <Glyphicon glyph={icon} />}
        <FormControl
          type={type}
          placeholder={placeholder}
          {...input}
          {...custom}
        />
      </div>
      {touched && error && <HelpBlock>{error}</HelpBlock>}
    </FormGroup>
  );

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="login-form">
        <img src={require('../../public/images/logo_white.png')} alt="testio" />
        <form onSubmit={handleSubmit}>
          <Field
            icon="user"
            name="username"
            component={this.renderFieldComponent}
            placeholder="Username"
            type="text"
          />
          <Field
            icon="lock"
            name="password"
            component={this.renderFieldComponent}
            placeholder="Password"
            type="password"
          />
          <Button
            type="submit"
            bsStyle="success"
            bsSize="large"
            block
          >
            Log In
          </Button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'LoginForm',
  validate: validateLoginForm,
})(LoginForm);
