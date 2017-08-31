import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from '../../actions/index';
// import { FormStyle } from './styles/FormStyle';

import { Field, reduxForm, SubmissionError } from 'redux-form'

class Form extends Component {

    submit = (values) => {

      let error = {},
          isError = false;

      if(values.username == undefined) {
        error.username = 'Please enter your username';
        isError = true;
      }

      if(values.password == undefined) {
        error.password = 'Please enter your password';
        isError = true;
      }

      if (isError) {
        throw new SubmissionError(error)
      } else {
        this.props.Login(values);
        console.log(this.props.login);
        //then dispatch servers?
      }
    }

    renderField = ({type, className, label, input, placeholder, meta: {touched, error} }) => (

        <div className='form-group'>
          <input {...input} className={className} type={type} placeholder={placeholder}/>
          {touched && error &&
           <span className="error">{error}</span>}
        </div>
    );

    render() {
        return (
          <div className="container">
            <form onSubmit={this.props.handleSubmit(this.submit)}>
              <Field name="username" className='form-control'
              component={this.renderField} type="text"
              placeholder='Username'/>
              <Field name="password" className='form-control'
              component={this.renderField} type="password"
              placeholder='Password'/>
              <button type="submit" className='btn'>Login</button>
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
