import LoginForm from 'components/LoginForm/Form';
import bgImage from 'images/test.jpg';
import * as React from 'react';

const LoginPage: React.SFC<{}> = () => (
  <div
    style={{
      backgroundImage: `url(${bgImage})`
    }}
    className="d-flex justify-content-center align-items-center flex-wrap vh-100 flex-column"
  >
    {/* <img src={bgImage} alt="test" /> */}
    <h1>Add text here</h1>
    <div style={{ maxWidth: 400 }}>
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
