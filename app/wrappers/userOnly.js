import React from 'react';
import { Pages } from 'app/utils/routes';
import { localUserToken } from 'app/utils/constants';

export default function userOnly(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      if(!localStorage.getItem(localUserToken)) {
        this.props.history.push(Pages.login.route);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
