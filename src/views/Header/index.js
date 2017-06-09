import { connect } from 'react-redux';
import { logout } from '../../actions';
import Component from './Component';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Component);
