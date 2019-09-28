import ListItem from './list.item.tsx/list.item';
import React from 'react';
import { observer, inject } from 'mobx-react';
import { ServerListStore } from '../store';
import { decorate, computed, observable } from 'mobx'

interface IProps {
    serverListStore?: ServerListStore;
}

const ServerList: React.FC<IProps> = observer((props: IProps) => {
    const { servers } = props.serverListStore!;

    if (servers.length === 0) {
        return <div>Loading...</div>;
    }

    const items = props.serverListStore!.servers!.map((server) => {
        return (
            <ListItem server={server} key={`${server.distance}${server.name}`} />
        );
    });

    return (
        <div>
            {items}
        </div>
    );
});

export default inject('serverListStore')(ServerList);
