import React from 'react';
import { Field, reduxForm } from 'redux-form';
import LoginInput from './LoginInput';
import { connect } from 'react-redux';
import { loginToTestio } from '../../actions';

class LoginForm extends React.Component {

  renderError = ({error, submitFailed}) => {
    if(submitFailed && error){
      return(
          <div>{error}</div>
      );
    }
  };

  onSubmit = (formValues) => {
    this.props.loginToTestio(formValues);
  };

  render(){
    return(
      <form className="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          component={LoginInput}
          name="username"
          inputType="text"
          placeholder="Username"
          className="form__input form__input--username"
        />
        <Field
          component={LoginInput}
          name="password"
          inputType="password"
          placeholder="Password"
          className="form__input form__input--password"
        />
        <button className="form__btn">Log In</button>
      </form>
    );
  };
};

const validate = (formValues) => {
  const errors = {};

  if(!formValues.username){
    errors.username = 'You must enter a login';
  } else if(formValues.username !== 'tesonet'){
    errors.username = 'Ussername is incorrect';
  }
  if(!formValues.password){
    errors.password = 'You must enter a password';
  } else if(formValues.password !== 'partyanimal'){
    errors.password = 'Password is incorrect';
  }

  return errors;
};

export default reduxForm({
  form: 'LoginForm',
  validate: validate
})(connect(null, {
  loginToTestio
})(LoginForm));
