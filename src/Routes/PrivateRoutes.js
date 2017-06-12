import { connect } from 'react-redux';
import PrivateRoutesComponent from './PrivateRoutesComponent';

const mapStateToProps = state => ({ token: state.login.token });

export default connect(mapStateToProps)(PrivateRoutesComponent);
