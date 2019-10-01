import React from 'react';
import styles from './ServerList.module.scss';
import { inject, observer } from 'mobx-react';
import { ListItem } from './list.item.tsx/list.item';
import { Loader } from 'common/components/loader/loader';
import { ServerListStore } from '../store';

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
