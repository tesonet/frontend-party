import ListItem from './list.item.tsx/list.item';
import React from 'react';
import { observer, inject } from 'mobx-react';
import { ServerListStore } from '../store';

interface IProps {
    serverListStore?: ServerListStore;
}

const ServerList = observer(class ServerList extends React.Component<IProps> {
    public componentDidMount() {
       this.props.serverListStore!.fethcServers();
    }

    public render() {
        console.log(this.props.serverListStore!.servers);


        return (
            <div>
                <ListItem/>
            </div>
        );
    };
});

export default inject('serverListStore')(ServerList);
