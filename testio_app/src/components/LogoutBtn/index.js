import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LogoutBtn = ({logout}) => {
  return (
     <div className='col-6 col-sm-4'>
        <div className='logout-container'>
          <button onClick={logout} className='btn btn-light logout-btn'>
            <div className='logout-logo-container'>
              <object type='image/svg+xml' data='data/images/logout-ico.svg'>
                svg
              </object>
            </div>
            Logout
          </button>
        </div>
     </div>
  );
}

LogoutBtn.propTypes = {
  logout: PropTypes.func.isRequired,
}

export default LogoutBtn;