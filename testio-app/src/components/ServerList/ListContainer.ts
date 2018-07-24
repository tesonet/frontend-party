import { getServersList } from 'features/serverList/actions';
import { connect } from 'react-redux';
import { IApp } from 'types';
import List from './List';

const mapStateToProps = (state: IApp) => ({
  isVisible: !state.serverList.error && !state.serverList.isLoading,
  uids: state.serverList.uids
});

const mapDispatchToProps = (dispatch: any) => ({
  onMount: () => dispatch(getServersList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
