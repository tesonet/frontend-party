import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as loginActions from '../../reducers/login/actions';

class LoginScreen extends Component {
  componentWillMount() {
    const { dispatch, token } = this.props;

    if (!token) {
      dispatch(loginActions.login({ username: 'tesonet', password: 'partyanimal' }));
    }
  }

  renderLoading() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  renderContent() {
    return (
      <div className={'home-screen'}>
        <p>
          Here will be homescreen
        </p>
      </div>
    );
  }

  render() {
    const { isFetching } = this.props;

    return (
      isFetching ? this.renderLoading() : this.renderContent()
    );
  }
}

function mapStateToProps(state, props) {
  const { isFetching, errorMessage, token } = state.login;

  return {
    isFetching,
    errorMessage,
    token
  };
}

export default connect(mapStateToProps)(LoginScreen);
