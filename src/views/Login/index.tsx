import * as React from 'react';
import LoginForm from '../../components/form/LoginForm';
// @ts-ignore
import * as style from './index.scss';

class Login extends React.Component {
  public render() {
    return (
      <div className={style.login}>
        <div className={style.login__wrap}>
          <div className="container">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
