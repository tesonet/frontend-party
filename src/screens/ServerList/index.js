// @flow
import * as React from 'react';

import Screen from 'components/Screen';
import Scrollable from 'components/Scrollable';
import List from 'components/List';
import ListItem from 'components/ListItem';


const serverListHeader = (
    <ListItem
        isHeader
        meta="DISTANCE"
    >
        SERVER
    </ListItem>
);

const ServerList = () => (
    <Screen fullHeight>
        <List
            as={Scrollable}
            header={serverListHeader}
        >
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
            <ListItem
                meta="4073 km"
            >
                Canada #10
            </ListItem>
        </List>
    </Screen>
);

export default ServerList;
