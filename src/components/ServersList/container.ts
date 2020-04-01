import { connect } from 'react-redux';
import { getServersListRequest } from './actions';
import { ServersList as Component } from './ServersList';

const mapStateToProps = ({ serversList }: any) => ({
  servers: serversList.servers,
  isLoading: serversList.isLoading
});

const mapDispatchToProps = {
  getServersListRequest
};

export const ServersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
