// @flow
import * as React from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo';
import Action from 'components/Action';
import {
    Columns,
    Col,
} from 'components/Columns';


const Header = () => (
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
                >
                    Logout
                </Action>
            </Col>
        </Columns>
    </HeaderComponent>
);

const HeaderComponent = styled.header`
    min-height: 112px;
    padding: 16px;
    display: flex;
`;

export default Header;
