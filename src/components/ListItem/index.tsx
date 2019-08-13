import React from "react";
import { ServerItem } from "../../store/servers/types";

const ListItem:React.SFC<ServerItem> = (props) => (
    <li className="list-item">
        <p>{props.name}</p>
        <p>{`${props.distance} km`}</p>
    </li>
);

export default ListItem;