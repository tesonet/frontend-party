import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from '../../actions/LoginAction';
// import { FormStyle } from './styles/FormStyle';

import { Field, reduxForm } from 'redux-form'

class Form extends Component {

  constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        err: false
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
            <form onSubmit={this.props.handleSubmit(Login)}>
               <div>
                <Field name="username" className='form-control' component={this.renderField} type="text" placeholder='Username'/>
              </div>
              <div>
                <Field name="password" className='form-control' component={this.renderField} type="password" placeholder='Password'/>
              </div>
              <button type="submit" className='btn'>Login</button>
            </form>
          </div>
        )
      }
    }

  Form = reduxForm({
    form: 'login'
  })(Form)

export default Form;
