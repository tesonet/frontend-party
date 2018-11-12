import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import LogoutButton from '../logout-button';
import ListContent from '../list-content';
import ListItem from '../list-item';
import { ASSETS_PATHS } from '../../../app';
import translations from './index.lang';

const ServersListLogo = styled.div`
    height: 30px;
    background: url(${ASSETS_PATHS.serversLogo}) no-repeat;
    background-size: contain;
    margin-left: 15px;
    margin-top: 35px;
    margin-bottom: 40px;
    flex-grow: 1;
`;

const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
`;

const ServersList = () => (
    <React.Fragment>
        <PageHeader>
            <ServersListLogo />
            <LogoutButton />
        </PageHeader>
        <ul className="list-group list-group-flush">
            <ListItem header className="list-group-item">
                <FormattedMessage {...translations.server} />
                <FormattedMessage {...translations.distance} />
            </ListItem>
            <ListContent />
        </ul>
    </React.Fragment>
);

export default ServersList;
