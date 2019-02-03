import React from 'react';

const ServersItem = ({ server }) => (
    <li className="servers__item">
        <h3 className="servers__item--data">{server.name}</h3>
        <p className="servers__item--data">{server.distance} km</p>
    </li>
);

export default ServersItem;
