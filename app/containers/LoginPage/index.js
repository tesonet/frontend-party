import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestUser } from 'app/redux/actions/userActions';
import LoginPage from './LoginPage';
import publicOnly from 'app/wrappers/publicOnly';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  requestUser: (credentials) => dispatch(requestUser(credentials)),
});

const connected = connect(mapStateToProps, mapDispatchToProps);

export default compose(connected, publicOnly)(LoginPage);
