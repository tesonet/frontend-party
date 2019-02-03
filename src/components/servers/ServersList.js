import React from 'react';
import ServersItem from './ServersItem';
import Spinner from '../utils/common/Spinner';

const ServersList = ({ servers, loading }) =>
    loading ? (
        <Spinner />
    ) : (
        <ul>
            {servers.map((server, i) => (
                <ServersItem key={i} server={server} />
            ))}
        </ul>
    );

export default ServersList;
