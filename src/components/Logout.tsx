// react and react dependencies
import * as React from 'react';
// helpers
import History from '../helpers/History';

const icoLogout = require('../svg/ico-logout.svg') as string;

class Logout extends React.Component {
  constructor(props: any) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.removeItem('authToken');
    History.push('/login');
  }

  render() {
    return (
      <div className="logout" onClick={this.handleLogout}>
        <img src={icoLogout} className="logout__ico" alt=""/>
        <span className="logout__text">Logout</span>
      </div>
    );
  }
}

export default Logout;
