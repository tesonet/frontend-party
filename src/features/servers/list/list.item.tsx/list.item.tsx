import React from 'react';
import styles from './ListItem.module.scss';
import { IServerRecord } from '../../store';

interface IProps {
    server: IServerRecord;
}

export const ListItem: React.FC<IProps> = (props: IProps) => {
    return (
        <div className={styles.tableRow}>
            <span>{props.server.name}</span>
            <span>{props.server.distance}</span>
        </div>
    );
};
