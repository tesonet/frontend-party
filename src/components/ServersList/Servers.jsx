import React, { memo, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import serversActions from '../../actions/serversActions';
import retrieveToken from '../../utils/retrieveToken';
import ServersTable from './ServersTable';
import ServersHeader from './ServersHeader';
import createServersColumns from '../../utils/createServersColumns';

const Servers = () => {
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const servers = useSelector((state) => state.servers.data);
    const errors = useSelector((state) => state.servers.error);
    const dispatch = useDispatch();
    const history = useHistory();
    const authToken = retrieveToken();

    const columns = useMemo(createServersColumns, []);

    useEffect(() => {
        if (loggedIn) {
            dispatch(serversActions.getServers(authToken));
        }
    }, []);

    if (loggedIn && !errors) {
        return (
            <div className="servers">
                <ServersHeader />
                {servers && (
                    <ServersTable
                        data={servers}
                        columns={columns}
                        initialState={{
                            sortBy: [
                                {
                                    id: 'distance',
                                },
                                {
                                    id: 'name',
                                },
                            ],
                        }}
                    />
                )}
            </div>
        );
    }

    history.push('/');
    return null;
};

export default memo(Servers);
