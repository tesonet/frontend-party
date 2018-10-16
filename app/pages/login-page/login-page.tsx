import * as React from 'react';

import LoginForm from './login-form';

import * as Styles from './login-page.scss';

class LoginPage extends React.PureComponent<{}> {
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.overlay} />
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
