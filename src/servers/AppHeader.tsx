import React from 'react';
import { useDispatch } from 'react-redux';
import LogoTestioDarkImage from '../assets/logo-testio-dark.svg';
import { AppDispatch } from '../store';
import ExitIconImage from '../assets/exit-icon.svg';
import { logout } from '../slices/auth.slice';
import './AppHeader.scss';

const AppHeader: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="AppHeader d-flex p-4">
      <img src={LogoTestioDarkImage} alt="Testio logo" />
      <button
        className="d-flex align-items-center ml-auto p-2 logout-button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        <img src={ExitIconImage} className="mr-2" alt="Exit icon" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default AppHeader;
