import { connect } from 'react-redux';

import Router from './Router.js';

export default connect((state) => {
  return {
    loggedIn: state.reducerAuth.loggedIn,
    tokenCheckDone: state.reducerAuth.tokenCheckDone,
  };
})(Router);
