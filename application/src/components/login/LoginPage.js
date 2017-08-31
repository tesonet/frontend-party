import React, { Component } from 'react';
import Form from './Form';
import './styles/LoginPageStyle.css';

class LoginPage extends Component {

  render() {
    return(
      <div className='loginPage'>
        <div className='container'>
          <img className='logo' src={require('../../assets/logo-white.png')} alt={'Testio logo'}/>
          <Form />
        </div>
      </div>
    );
  }
}

export default LoginPage;
