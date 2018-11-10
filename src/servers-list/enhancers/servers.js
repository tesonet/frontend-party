import { connect } from 'react-redux';
import {
    compose,
    lifecycle,
    branch,
    renderComponent
} from 'recompose';

import EmptyState from '../components/empty-state';
import { getAuthTokenFromStorage, createUid } from '../../app/utils';
import { getServerslist } from '../repos';
import { setServersList, setServersLoading } from '../actions';

const loadServersList = lifecycle({
    componentDidMount() {
        const { dispatch } = this.props;

        // if no token redirect to login
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
    connect(({ servers: { list, loading } }) => ({
        serversList: list,
        loading
    })),
    loadServersList,
    handleVisibility
);
