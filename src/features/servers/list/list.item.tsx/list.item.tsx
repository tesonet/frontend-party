import React from 'react';
import { IServerRecord } from '../../store';
import styles from './ListItem.module.scss';

interface IProps {
    server: IServerRecord;
}

const ListItem: React.FC<IProps> = (props: IProps) => {
    return (
        <div className={styles.tableRow}>
            <span>{props.server.name}</span>
            <span>{props.server.distance}</span>
        </div>
    );
};

export default ListItem;
