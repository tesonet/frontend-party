import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { initTokenStorage } from 'store/modules/authentication/actions';
import { getStoredAuthToken } from 'store/modules/authentication/helpers';
import PATHS from 'shared/constants/PATHS';

const requireAuth = (WrappedComponent: React.ComponentType<any>): React.ComponentType<any> => {
  interface Props {
    isAuthenticated: boolean,
    history: History,
  }

  class RequireAuth extends React.Component<any> {
    componentDidMount() {
      this.handleAuthentication();
    }

    componentDidUpdate() {
      this.handleAuthentication();
    }

    handleAuthentication() {
      const { isAuthenticated, history, initTokenStorage: initStorage } = this.props;
      if (!isAuthenticated) {
        const storedToken = getStoredAuthToken();
        if (!storedToken) {
          history.push(PATHS.HOME);
          return;
        }
        initStorage(storedToken);
      }
    }

    render() {
      const { isAuthenticated, ...restProps } = this.props;
      return isAuthenticated ? <WrappedComponent {...restProps} /> : null;
    }
  }

  const mapStateToProps = (state: any) => ({
    isAuthenticated: !!state.authentication.token,
  });

  const mapDispatchToProps = {
    initTokenStorage,
  };

  return withRouter(connect(mapStateToProps, mapDispatchToProps)(RequireAuth));
};

export default requireAuth;
