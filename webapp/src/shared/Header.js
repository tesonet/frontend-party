import React from 'react';
import { Link } from 'react-router-dom';

import TestioLogo from '../assets/images/logo_833x215.png';

export default function Header() {
  return (
    <div className="col-auto">
      <header className="page-header navbar fixed-top bg-white py-4">
        <div className="navbar-brand">
          <img src={ TestioLogo } height="30" alt="Testio."/>
        </div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/logout">
              <span className="oi oi-account-logout" />
              <span className="label">Logout</span>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
