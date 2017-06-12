import { connect } from 'react-redux';
import { getServers } from '../../actions';
import Component from './Component';

const mapStateToProps = state => ({ ...state.servers });

const mapDispatchToProps = dispatch => ({
  getServers: () => dispatch(getServers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
