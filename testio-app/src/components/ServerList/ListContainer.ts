import { connect } from 'react-redux';
import { getServersList } from '../../features/serverList/actions';
import { IApp } from '../../types';
import List from './List';

const mapStateToProps = (state: IApp) => ({
    uids: state.list.uids
})

const mapDispatchToProps = (dispatch: any) => ({
    onMount: () => dispatch(getServersList())
});

export default connect(mapStateToProps, mapDispatchToProps)(List);