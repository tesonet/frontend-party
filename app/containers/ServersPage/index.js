import { connect } from 'react-redux';
import { compose } from 'redux';
import { requestServers, sortServers, clearServers } from 'app/redux/actions/serversActions';
import { clearUser } from 'app/redux/actions/userActions';

import ServersPage from './ServersPage';
import userOnly from 'app/wrappers/userOnly';

const mapStateToProps = (state) => ({
  user: state.user,
  servers: state.servers,
});

const mapDispatchToProps = (dispatch) => ({
  requestServers: ()=> dispatch(requestServers()),
  sortServers: (data) => dispatch(sortServers(data)),
  clearUser: () => dispatch(clearUser()),
  clearServers: () => dispatch(clearServers())
});

const connected = connect(mapStateToProps, mapDispatchToProps);

export default compose(connected, userOnly)(ServersPage);
