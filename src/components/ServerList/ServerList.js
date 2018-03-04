import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { ROUTE_LOGIN } from '../../constants/routes';
import copy from './ServerList.json';

class ServerList extends Component {
  constructor(props) {
    super(props);

    this.checkAuthToken = this.checkAuthToken.bind(this);
  }

  componentWillMount() {
    this.checkAuthToken(this.props.token);
  }

  componentWillReceiveProps(nextProps) {
    this.checkAuthToken(nextProps.token);
  }

  checkAuthToken(token) {
    if (!token) {
      this.props.push(ROUTE_LOGIN);
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>{copy.welcome}</h1>
        </header>
        <p>
          {copy.body}
        </p>
      </div>
    );
  }
}

ServerList.propTypes = {
  push: PropTypes.func.isRequired,
  token: PropTypes.string,
};

const mapStateToProps = store => {
  const { auth: { token } } = store;

  return { token };
};

const mapDispatchToProps = dispatch => ({
  push: path => dispatch(push(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
