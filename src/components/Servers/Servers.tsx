import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { Sizes, Icons } from '../../common/constants';
import Button from '../common/Button';
import { actions as authActions } from '../../ducks/auth.duck';
import ServerList from '../ServerList/ServerList';
import logoDark from '../../static/logo-dark.png';
import { screens } from '../../utils/helpers';
import { heights } from '../../theme';

const Header = styled.div`
    display: flex;
    height: ${heights.default.header};
    padding: 15px;
    align-items: center;
    justify-content: space-between;

    @media ${screens[Sizes.XS]} {
        height: ${heights[Sizes.XS].header};
    }
`;

const Logo = styled.img`
    max-width: 100%;
    height: auto;

    @media ${screens[Sizes.XS]} {
        max-width: 30%;
    }
`;

type DispatchProps = {
    logout: typeof authActions.logout;
};

const Servers = ({ logout }: DispatchProps) => (
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
)(Servers);
