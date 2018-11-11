import React from 'react';
import styled from 'styled-components';

import LogoutButton from './logout-button';
import ListContent from './list-content';
import ListItem from './list-item';
import { COLORS, ASSETS_PATHS } from '../../app';

const ServersListLogo = styled.div`
    height: 30px;
    background: url(../../../../${ASSETS_PATHS.serversLogo}) no-repeat;
    background-size: contain;
    margin-left: 15px;
    margin-top: 35px;
    margin-bottom: 40px;
    flex-grow: 1;
`;

const ListItemHeader = styled(ListItem)`
    background-color: ${COLORS.listHeaderBackgroundColor};
    text-transform: uppercase;
`;

const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
`;

const ServersList = () => (
    <div>
        <PageHeader>
            <ServersListLogo />
            <LogoutButton />
        </PageHeader>
        <ul className="list-group list-group-flush">
            <ListItemHeader className="list-group-item">
                <span>Server</span>
                <span>Distance</span>
            </ListItemHeader>
            <ListContent />
        </ul>
    </div>
);

export default ServersList;
