import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import storage from '../../utils/localStorage';
import { AUTH_TOKEN_KEY } from '../../constants/token';
import { serversList as serversListAction } from '../../actions/servers';
import ServersErrorMessage from '../ServersErrorMessage/ServersErrorMessage';
import { ReactComponent as Spinner } from '../../assets/images/spinner.svg';
import './ServersList.scss';

const ServersList = ({ fetchList, serversList, loading, serverErrorType }) => {
    const [sortType, setSortType] = useState('asc');

    useEffect(() => {
        fetchList(storage.get(AUTH_TOKEN_KEY));
    }, [fetchList]);

    const [servers, setServers] = useState([]);

    useEffect(() => {
        setServers(serversList);
    }, [serversList]);

    const handleSort = event => {
        const innerHTML = event.target.innerHTML.toLowerCase();
        const sortKey = innerHTML === 'server' ? 'name' : innerHTML;

        const sortedServers = [...servers].sort((a, b) =>
            a[sortKey] > b[sortKey] ? 1 : b[sortKey] > a[sortKey] ? -1 : 0
        );

        if (sortType === 'desc') {
            sortedServers.reverse();
            setSortType('asc');
        } else {
            setSortType('desc');
        }

        setServers(sortedServers);
    };

    return (
        <>
            <table className="servers">
                <thead className="servers__header">
                    <tr className="servers__header-row">
                        <th className="servers__server" onClick={handleSort}>
                            SERVER
                        </th>
                        <th className="servers__distance" onClick={handleSort}>
                            DISTANCE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {!!serverErrorType && (
                                <ServersErrorMessage errors={[serverErrorType]} />
                            )}
                            {loading && <Spinner className="servers__spinner" />}
                        </td>
                    </tr>
                    {servers &&
                        servers.map(server => {
                            return (
                                <tr
                                    className="servers__item"
                                    key={`${server.name}-${server.distance}`}
                                >
                                    <td className="servers__item-name">{server.name}</td>
                                    <td className="servers__item-distance">{`${server.distance} km`}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};

ServersList.propTypes = {
    fetchList: PropTypes.func.isRequired,
    serversList: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    ),
    loading: PropTypes.bool.isRequired,
    serverErrorType: PropTypes.string
};

ServersList.defaultProps = {
    serversList: [],
    serverErrorType: ''
};

const mapStateToProps = state => {
    return {
        serversList: state.servers.serversList,
        loading: state.servers.loading,
        serverErrorType: state.servers.errorType
    };
};

const mapDispatchToProps = dispatch => ({
    fetchList: userToken => dispatch(serversListAction(userToken))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServersList);
