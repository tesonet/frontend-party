// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux';
import privateRoute from '../../../hoc/privateRoute';
import api from '../../../utils/api';
import { doLogout } from '../authActions';

export const ROUTE_PATH = '/logout';

export class LogoutContainer extends Component {
  static defaultProps = {
    doLogout: () => {}
  };

  componentDidMount() {
    api.setToken(null);
    this.props.doLogout();
  }

  render() {
    return null;
  }
}

export default privateRoute(connect(null, { doLogout })(LogoutContainer));
