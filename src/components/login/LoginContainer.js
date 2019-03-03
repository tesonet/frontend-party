import { connect } from 'react-redux';

import Login from './Login.js';

export default connect((state) => {
  return {
    loggedIn: state.reducerAuth.loggedIn,
    logInLoading: state.reducerAuth.logInLoading,
    logInErrorText: state.reducerAuth.logInErrorText,
  };
})(Login);
