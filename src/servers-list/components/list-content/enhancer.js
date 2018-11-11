import { connect } from 'react-redux';
import {
    compose,
    lifecycle,
    branch,
    renderComponent
} from 'recompose';

import EmptyState from '../empty-state';
import { getAuthTokenFromStorage, createUid } from '../../../app';
import { getServerslist } from '../../repos';
import { setServersList, setServersLoading, setServersFailToLoad } from '../../actions';
import { getServerslistSorted } from '../../selectors';

const connectState = connect(state => ({
    serversList: getServerslistSorted(state),
    failedToLoad: state.servers.failedToLoad,
    loading: state.servers.loading
}));

const loadServersList = lifecycle({
    componentDidMount() {
        const { dispatch } = this.props;
        const authToken = getAuthTokenFromStorage();

        dispatch(setServersLoading(true));
        dispatch(setServersFailToLoad(false));

        getServerslist(authToken)
            .then(response => dispatch(setServersList(response.data
                .map(server => ({
                    ...server,
                    key: createUid()
                })))))
            .catch(() => dispatch(setServersFailToLoad(true)))
            .then(() => dispatch(setServersLoading(false)));
    }
});


const handleVisibility = branch(
    ({ loading, serversList, failedToLoad }) => !loading && !serversList.length && !failedToLoad,
    renderComponent(EmptyState),
);

export default compose(
    connectState,
    loadServersList,
    handleVisibility
);
