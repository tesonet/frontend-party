import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loginToTestio } from '../actions';

class LoginWindow extends React.Component {

  renderError = ({error, submitFailed}) => {
    if(submitFailed && error){
      return(
          <ErrorMessages>{error}</ErrorMessages>
      );
    }
  };

  renderInput = ({input, placeholder, inputType, className, meta}) => {
    return(
      <FormDiv>
        <LoginFormInput {...input} type={inputType} placeholder={placeholder} className={className} autoComplete="off" />
        {this.renderError(meta)}
      </FormDiv>
    );
  };

  onSubmit = (formValues) => {
    this.props.loginToTestio(formValues);
  };

  render(){
    return(
      <LoginBody>
        <LoginFormWrap>
        <BigLogo src="./img/logo.png" alt="testio" title="testio" />
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="username" component={this.renderInput} placeholder="Username" className="username" inputType="input" />
          <Field name="password" component={this.renderInput} placeholder="Password" className="password" inputType="password" />
          <LoginFormButton className="button submit">Log In</LoginFormButton>
        </form>
        </LoginFormWrap>
      </LoginBody>
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

//Styled components
const borderRadius = '6px';
const loginButtonBg = '#9fd533';
const loginButtonBgHover = '#86b300';

const LoginBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('./img/main-bg.jpg') no-repeat center;
  background-size: cover;
`;
const LoginFormWrap = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;
const LoginFormButton = styled.button`
  width: 100%;
  background: ${loginButtonBg};
  color: #fff;
  border: none;
  border-radius: ${borderRadius};
  height: 56px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  &:hover {
      background: ${loginButtonBgHover};
    }
`;
const LoginFormInput = styled.input`
  background: #fff;
  color: #999;
  width: 100%;
  border: none;
  border-radius: ${borderRadius};
  padding: 19px 20px 19px 54px;
  font-size: 16px;
  margin: 0px;
  &::-webkit-input-placeholder {
    color: #b2b2b2;
  }
  &.username{
    background: url('./img/username.png') no-repeat 24px 19px #fff;
  }
  &.password{
    background: url('./img/password.png') no-repeat 24px 19px #fff;
  }
`;
const FormDiv = styled.div`
  position: relative;
  width:100%;
  margin-bottom: 20px;
`;
const ErrorMessages = styled.div`
  background: #e8b3b3;
  color: red;
  position: absolute;
  width: 100%;
  padding: 3px 10px;
  bottom: -13px;
  font-size: 14px;
  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
`;
const BigLogo = styled.img`
  width: 100%;
  max-width: 246px;
  margin: 0 auto 68px;
  display: block;
`;
//END Styled components

const formWrapped = reduxForm({
  form: 'LoginForm',
  validate: validate
})(LoginWindow);

export default connect(null, {
  loginToTestio
})(formWrapped);
