import React from 'react';
import styled from 'styled-components';

import enhanceLogout from '../enhancers/logout-button';
import ListContent from './list-content';

const ServersListLogo = styled.div`
    height: 30px;
    background: url(../../../../images/servers-logo.png) no-repeat;
    background-size: contain;
    margin-left: 15px;
    margin-top: 35px;
    margin-bottom: 40px;
    flex-grow: 1;
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


const LogoutButton = styled.button`
    height: 56px;
    background: #ffffff url(../../../../images/logout.png) no-repeat scroll 24px 18px;
    border: none;
    padding: 0 15px 0 50px;
    cursor: pointer;

    &:focus,
    &:hover {
        outline: none;
        color: #99cc33;
    }
`;

const PageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
`;

const EnhancedLogoutButton = enhanceLogout(LogoutButton);

const ServersList = () => (
    <div>
        <PageHeader>
            <ServersListLogo />
            <EnhancedLogoutButton>Logout</EnhancedLogoutButton>
        </PageHeader>
        <ul className="list-group list-group-flush">
            <ListItem header className="list-group-item">
                <span>Server</span>
                <span>Distance</span>
            </ListItem>
            <ListContent />
        </ul>
    </div>
);

export default ServersList;
