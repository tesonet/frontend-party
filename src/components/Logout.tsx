// react and react dependencies
import * as React from 'react';

const icoLogout = require('../svg/ico-logout.svg') as string;

class Logout extends React.Component {
  render() {
    return (
      <div className="logout">
        <img src={icoLogout} className="logout__ico" alt=""/>
        <span className="logout__text">Logout</span>
      </div>
    );
  }
}

export default Logout;
