import React from 'react';
import { Link } from 'react-router';
import logoInner from '../images/logo-inner.png';

class ProtectedView extends React.Component {
  constructor() {
    super();
    this.state = {items: []}
  }

  componentWillMount() {
    fetch( "http://playground.tesonet.lt/v1/servers/" )
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({items}))
  }

  render () {
    let items = this.state.items
        return (
            <div className="container-fluid">
              <nav className="navbar navbar-light">
                <Link to="/servers" className="navbar-brand">
                  <img src={logoInner} className="app-logo-inner" height="30px" alt="testio" />
                </Link>
                <ul className="nav navbar-nav float-xs-right">
                  <li className="nav-item">
                    <Link to="/" className="nav-link"><i data-icon="e" aria-hidden="true"></i><span className="title">Log out</span></Link>
                  </li>
                </ul>
              </nav>
              <table className="table">
                <thead className="thead-default">
                  <tr>
                    <th>Server</th>
                    <th className="text-xs-right">Distance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>


                {items.map(item => <div className="row">{item.name}</div>)}
            </div>
        );
    }
}

export default ProtectedView;
