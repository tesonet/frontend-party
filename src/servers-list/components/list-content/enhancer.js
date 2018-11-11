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
import { setServersList, setServersLoading } from '../../actions';
import { isServersListLoading, getServerslistSorted } from '../../selectors';

const connectState = connect(state => ({
    serversList: getServerslistSorted(state),
    loading: isServersListLoading(state)
}));

const loadServersList = lifecycle({
    componentDidMount() {
        const { dispatch } = this.props;
        const authToken = getAuthTokenFromStorage();

        dispatch(setServersLoading(true));

        getServerslist(authToken)
            .then(response => dispatch(setServersList(response.data
                .map(server => ({
                    ...server,
                    key: createUid()
                })))))
            .catch(() => dispatch(setServersLoading(false)))
            .then(() => dispatch(setServersLoading(false)));
    }
});


const handleVisibility = branch(
    ({ loading, serversList }) => !loading && !serversList.length,
    renderComponent(EmptyState),
);

export default compose(
    connectState,
    loadServersList,
    handleVisibility
);
