import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import enhance from '../enhancers/servers';

const DITANCE_UNITS = 'km';

const getDistanceWithUnits = distance => `${distance} ${DITANCE_UNITS}`;

const ServersListLogo = styled.div`
    height: 30px;
    background: url(../../../../images/servers-logo.png) no-repeat;
    background-size: contain;
    margin-left: 15px;
    margin-top: 35px;
    margin-bottom: 40px;
`;

const ListItem = styled.li`
    background-color: ${props => props.header ? '#f5f5f5' : '#ffffff'};
    text-transform: ${props => props.header ? 'uppercase' : 'initial'};
    color: #666666;
    display: flex;
    justify-content: space-between;
    height: 60px;
    line-height: 36px;
`;

const ServersList = ({ serversList }) => (
    <div>
        <ServersListLogo />
        <ul className="list-group list-group-flush">
            <ListItem header className="list-group-item">
                <span>Server</span>
                <span>Distance</span>
            </ListItem>
            { serversList.map(({ key, name, distance }) => (
                <ListItem key={key} className="list-group-item">
                    <span>{ name }</span>
                    <span>{ getDistanceWithUnits(distance) }</span>
                </ListItem>
            ))}

        </ul>
    </div>
);

ServersList.propTypes = {
    serversList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired
    }))
};

export default enhance(ServersList);
