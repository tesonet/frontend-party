import LogoutButton from 'components/Buttons/LogoutContainer';
import logo from 'images/server_logo.png';
import * as React from 'react';
import 'scss/header.scss';

const FormPage: React.SFC<{}> = () => (
  <header className="container-fluid header">
    <div className="row">
      <div className="col-6">
        <img src={logo} alt="logo" />
      </div>
      <div className="col-6 d-flex d-flex justify-content-end flex-wrap  align-items-center">
        <LogoutButton />
      </div>
    </div>
  </header>
);

export default FormPage;
