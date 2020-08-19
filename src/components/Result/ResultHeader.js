import React from 'react';
import { useDispatch } from "react-redux";
import { signOut } from '../../actions';

const ResultHeader = () => {
  const dispatch = useDispatch();

  return(
    <header className="header">
        <div className="header__side">
          <img className="header__img" src="./img/small-logo.svg" alt="testio" title="testio" />
        </div>
        <div className="header__side header__side--right">
          <button className="header__btn" onClick={() => dispatch(signOut())}>Logout</button>
        </div>
    </header>
  );
}

export default ResultHeader;
