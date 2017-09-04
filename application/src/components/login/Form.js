import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from '../../actions/index';
import './styles/FormStyle.css';

import { Field, reduxForm, SubmissionError } from 'redux-form'

class UsernameIcon extends Component {
  render() {
    return(
      <svg className="username-icon" width="14" height="16" viewBox="0 0 14 16">
        <path id="ico-username" d="M582,383a4,4,0,0,0-4,4v1a4,4,0,0,0,8,0v-1A4,4,0,0,0,582,383Zm4.036,9.426a5.961,5.961,0,0,1-8.072,0A3.859,3.859,0,0,0,575,396v3h14v-3A3.859,3.859,0,0,0,586.036,392.426Z" transform="translate(-575 -383)"/>
      </svg>
    )
  }
}

class PasswordIcon extends Component {
  render() {
    return(
      <svg className="password-icon" width="14" height="18" viewBox="0 0 14 18">
        <path id="ico-lock" d="M582,458a4.012,4.012,0,0,0-4,4v3h-2a0.945,0.945,0,0,0-1,1v9a0.945,0.945,0,0,0,1,1h12a0.945,0.945,0,0,0,1-1v-9a0.945,0.945,0,0,0-1-1h-2v-3A4.012,4.012,0,0,0,582,458Zm2,7h-4v-3a2,2,0,0,1,4,0v3Zm-2,3a1,1,0,0,1,1,1v3a1,1,0,0,1-2,0v-3A1,1,0,0,1,582,468Z" transform="translate(-575 -458)"/>
      </svg>
    )
  }
}

class Form extends Component {

    submit = (values) => {

      let error = {},
          isError = false;

      if(values.username === undefined ) {
        error.username = 'Please enter your username';
        isError = true;
      } else if (values.username.trim() === "") {
        error.username = 'Please enter your username';
        isError = true;
      }

      if(values.password === undefined ) {
        error.password = 'Please enter your password';
        isError = true;
      } else if (values.password.trim() === "") {
        error.password = 'Please enter your password';
        isError = true;
      }

      if (isError) {
        throw new SubmissionError(error)
      } else {
        this.props.Login(values);
      }
    }

    renderField = ({icon, type, className, label, input, placeholder, meta: {touched, error} }) => (

        <div className='form-group'>
          <div className='input'>
            {icon}
            <input {...input} className={className} type={type} placeholder={placeholder}/>
          </div>
          {touched && error &&
           <span className="error">{error}</span>}
        </div>
    );

    render() {
        return (
          <div className="form">
            <form onSubmit={this.props.handleSubmit(this.submit)}>
              <Field icon = {<UsernameIcon />} name="username" className='form-control'
              component={this.renderField} type="text"
              placeholder='Username'/>
              <Field icon = {<PasswordIcon />} name="password" className='form-control'
              component={this.renderField} type="password"
              placeholder='Password'/>
              <button type="submit" className='btn'>Log In</button>
            </form>
            <span>{this.props.login.errorMessage ? this.props.login.errorMessage : ''}</span>
          </div>
        )
      }
    }

  Form = reduxForm({
    form: 'login',
    destroyOnUnmount: false
  })(Form)

  const mapStateToProps = (state) => {
    return {
      login: state.LoginReducer
    }
  }

  const mapDispatchToProps = (dispatch) => {
  return {
    Login: (values) => {
      dispatch(Login(values));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
