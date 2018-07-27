import LoginPageLoader from 'components/Loader/LoginLoaderContainer';
import LoginForm from 'components/LoginForm/Form';
import bgImage from 'images/login_background.jpg';
import logo from 'images/login_logo.png';
import * as React from 'react';

const LoginPage: React.SFC<{}> = () => (
  <div
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover'
    }}
    className="d-flex justify-content-center align-items-center flex-wrap mih-100 flex-column p-h-20"
  >
    <img src={logo} alt="logo" className="p-b-70 p-t-70" />
    <div className="w-100 p-b-70 maw-360 position-relative">
      <LoginForm />
      <LoginPageLoader />
    </div>
  </div>
);

export default LoginPage;
