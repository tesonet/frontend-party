// react and react dependencies
import * as React from 'react';
// components
import Logout from '../components/Logout';

const innerLogo = require('../images/inner-logo.png') as string;

class InnerHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="wrapper wrapper--header">
          <a href="#">
            <img src={innerLogo} className="header__logo" alt=""/>
          </a>
          <Logout/>
        </div>
      </header>
    );
  }
}

export default InnerHeader;
