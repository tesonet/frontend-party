import * as React from 'react';
import LoginForm from '../../components/form/LoginForm';
import './index.scss';

class Login extends React.Component {
  public render() {
    return (
      <div className="login">
        <div className="login__wrap">
          <div className="container">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
