import * as React from 'react';
import LoginForm from '../LoginForm/Form';

const LoginPage: React.SFC<{}> = () => (
  <div className="d-flex justify-content-center align-items-center flex-wrap vh-100 flex-column">
    <h1>Add text here</h1>
    <div style={{ maxWidth: 400 }}>
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
