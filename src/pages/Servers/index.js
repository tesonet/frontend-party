import React from 'react';
import { useDispatch } from 'react-redux';

import { auth } from '~/state';

import logoutIcon from '<assets>/icons/logout.svg';

import './style.scss';

function Servers() {
  const dispatch = useDispatch();
  return (
    <div className="servers container">
      <div className="servers__header">
        <h1>
          testio<mark>.</mark>
        </h1>
        <button
          onClick={() => dispatch(auth.actions.logout())}
          type="button"
          className="servers__header-logout"
        >
          <img src={logoutIcon} alt="logout" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Servers;
