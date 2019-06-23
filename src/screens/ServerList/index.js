// @flow
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import serverActions from 'store/servers/actions';

import Screen from 'components/Screen';
import Spinner from 'components/Spinner';
import Center from 'components/Center';
import Scrollable from 'components/Scrollable';
import List from 'components/List';
import ListItem from 'components/ListItem';

import { type ServerListReducerT } from 'store/servers';

const serverListHeader = (
    <ListItem
        isHeader
        meta="DISTANCE"
    >
        SERVER
    </ListItem>
);

const ServerList = () => {
    const dispatch = useDispatch();
    const servers: ServerListReducerT = useSelector(state => state.servers);
    React.useEffect(() => {
        dispatch(serverActions.creators.getServerList());
    }, [dispatch]);

    return (
        <Screen fullHeight>
            {servers.isGetServersInProcessing ? (
                <Center>
                    <Spinner
                        size={48}
                    />
                </Center>
            ) : (
                <List
                    as={Scrollable}
                    header={serverListHeader}
                    data-test="serverList"
                >
                    {servers.servers.map(({
                        id,
                        name,
                        distance,
                    }) => (
                        <ListItem
                            key={id}
                            meta={`${distance} km.`}
                        >
                            {name}
                        </ListItem>
                    ))}
                </List>
            )}
        </Screen>
    );
};

export default ServerList;
