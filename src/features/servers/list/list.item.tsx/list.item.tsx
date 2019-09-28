import React from 'react';
import { IServerRecord } from '../../store';

interface IProps {
    server: IServerRecord;
}

const ListItem: React.FC<IProps> = (props: IProps) => {
    return (
        <div>
            <span>{props.server.name}</span>
            <span>{props.server.distance}</span>
        </div>
    );
};

export default ListItem;
