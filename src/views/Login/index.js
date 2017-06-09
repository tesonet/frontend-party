import { connect } from 'react-redux';
import { login } from '../../actions';
import Component from './Component';

const mapStateToProps = state => ({
  token: state.ui.token,
  error: state.ui.loginError,
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
