import { connect } from 'react-redux';
import { login } from '../../actions';
import Component from './Component';

const mapStateToProps = state => ({
  token: state.login.token,
  error: state.login.error,
  loading: state.login.loading,
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
