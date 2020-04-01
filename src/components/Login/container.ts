import { connect } from 'react-redux';
import { loginRequest } from './actions';
import { Login as Component } from './Login';

const mapStateToProps = ({ login }: any) => ({
  authLoading: login.authLoading,
  error: login.error
});

const mapDispatchToProps = {
  loginRequest
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(Component);
