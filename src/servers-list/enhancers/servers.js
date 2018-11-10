import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { getAuthTokenFromStorage, createUid } from '../../app/utils';
import { getServerslist } from '../repos';
import { setServers } from '../actions';

const loadServersList = lifecycle({
    componentDidMount() {
        const { dispatch } = this.props;

        // if no token redirect to login
        const authToken = getAuthTokenFromStorage();
        getServerslist(authToken)
            .then(response => dispatch(setServers(response.data
                .map(server => ({
                    ...server,
                    key: createUid()
                })))));
    }
});


export default compose(
    connect(({ servers: { list } }) => ({
        serversList: list
    })),
    loadServersList
);
