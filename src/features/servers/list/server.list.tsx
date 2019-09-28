import ListItem from './list.item.tsx/list.item';
import React from 'react';
import { observer, inject } from 'mobx-react';
import { ServerListStore } from '../store';
import styles from './ServerList.module.scss';
import Loader from '../../../common/components/loader/loader';

interface IProps {
    serverListStore?: ServerListStore;
}

const ServerList: React.FC<IProps> = observer((props: IProps) => {
    const { servers } = props.serverListStore!;

    if (servers.length === 0) {
        return (
            <div className={styles.loader}>
                <Loader />
            </div>
        );
    }

    const items = props.serverListStore!.servers!.map((server) => {
        return (
            <ListItem server={server} key={`${server.distance}${server.name}`} />
        );
    });

    return (
        <div>
            <div className={styles.tableHeader}>
                <span>SERVER</span>
                <span>DISTANCE</span>
            </div>
            {items}
        </div>
    );
});

export default inject('serverListStore')(ServerList);
