import React from "react";
import {connect} from "react-redux";
import {Redirect, Router} from "@reach/router";
import styled from "styled-components";

import LoginPage from "./login-page";
import ServerListPage from "./server-list-page";


const StyledRouter = styled(Router)`
   height: 100%;
  `;

const LoginRoute = ({logged_in}) => (
    logged_in === false
        ? <LoginPage path={"/"}/>
        : <Redirect noThrow to='/dashboard'/>
);

const GuardedRoute = ({component: Component, logged_in, path}) => (
    logged_in === true
        ? <Component path={path}/>
        : <Redirect noThrow to='/'/>
);

export const RouterOutlet = ({logged_in}) => {
    return (
        <StyledRouter>
            <LoginRoute logged_in={logged_in} path={"/"}/>
            <GuardedRoute logged_in={logged_in} path={"/dashboard"} component={ServerListPage}/>
        </StyledRouter>
    );
};

export default connect(
    state => state.auth,
    null
)(RouterOutlet);
