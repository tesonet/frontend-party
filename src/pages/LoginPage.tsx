// react and react dependencies
import * as React from 'react';
// components
import LoginForm from '../components/LoginForm';

const loginBackground = require("../images/background.jpg") as string;
const logo = require("../images/logo.png") as string;

class loginPage extends React.Component {
  render() {
    return (
      <div className="login" style={{ backgroundImage: 'url('+loginBackground+')' }}>
        <div className="login__form">
          <img src={logo} className="login__logo" alt=""/>
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default loginPage;
