// @flow
import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { navigate } from '@reach/router';

import authActions from 'store/auth/actions';
import routes from 'routes';

import Logo from 'components/Logo';
import Action from 'components/Action';
import {
    Columns,
    Col,
} from 'components/Columns';


type PropsT = {};

const Header = () => {
    const dispatch = useDispatch();
    const handleLogoutClick = React.useCallback(() => {
        dispatch(authActions.creators.logout());
        navigate(routes.auth);
    }, [dispatch]);

    return (
        <HeaderComponent>
            <Columns
                align="center"
            >
                <Col>
                    <Logo isSmall />
                </Col>
                <Col isNarrow>
                    <Action
                        icon="logout"
                        onClick={handleLogoutClick}
                        data-test="action/logout"
                    >
                        Logout
                    </Action>
                </Col>
            </Columns>
        </HeaderComponent>
    );
};

const HeaderComponent = styled.header`
    min-height: 112px;
    padding: 16px;
    display: flex;
`;

export default React.memo<PropsT>(Header);
