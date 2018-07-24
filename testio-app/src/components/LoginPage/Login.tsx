import LoginForm from 'components/LoginForm/Form';
import bgImage from 'images/login_background.jpg';
import logo from 'images/login_logo.png';
import * as React from 'react';

const LoginPage: React.SFC<{}> = () => (
  <div
    style={{
      backgroundImage: `url(${bgImage})`
    }}
    className="d-flex justify-content-center align-items-center flex-wrap vh-100 flex-column"
  >
    <img src={logo} alt="logo" className="p-b-70" />
    <div className="w-100" style={{ maxWidth: 360 }}>
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
