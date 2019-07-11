import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { Sizes, Icons } from '../../common/constants';
import Button from '../Button/Button';
import { actions as authActions } from '../../ducks/auth.duck';
import ServerList from '../ServerList/ServerList';
import logoDark from '../../static/logo-dark.png';
import { screens } from '../../utils/helpers';

const Header = styled.div`
    display: flex;
    height: ${({ theme }) => theme.list.default.headerHeight}px;
    padding: 15px;
    align-items: center;
    justify-content: space-between;

    ${screens[Sizes.XS]`
        height: ${({ theme }) => theme.list.mobile.headerHeight}px;
    `}
`;

const Logo = styled.img`
    max-width: 100%;
    height: auto;

    ${screens[Sizes.XS]`
        max-width: 30%;
    `}
`;

type DispatchProps = {
    logout: typeof authActions.logout;
};

const ServerListPage = ({ logout }: DispatchProps) => (
    <Fragment>
        <Header>
            <Logo src={logoDark} />
            <Button icon={Icons.LOGOUT} onClick={logout}>
                Logout
            </Button>
        </Header>
        <ServerList />
    </Fragment>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
    logout: () => dispatch(authActions.logout()),
});

export default connect(
    null,
    mapDispatchToProps
)(ServerListPage);
