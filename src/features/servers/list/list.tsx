import { observer } from 'mobx-react';
import React from 'react';
import ListItem from './list.item.tsx/list.item';

const ServerList = observer(class ServerList extends React.Component {
    public render() {
        return (
            <div>
                <ListItem/>
            </div>
        )
    }
})

export default ServerList;
