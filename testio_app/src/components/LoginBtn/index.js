import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LoginBtn = ({username, password}) => {
  return (
     <button
       type='submit'
       className='btn login-btn'
       disabled={!username || !password}
     >Log In</button>
  );
}

LoginBtn.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export default LoginBtn;