import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import App from "../components/App";
import Login from "../views/Login";
import { LoginState } from "../store/login/types";

interface RoutesState {
    auth: LoginState;
}

const Routes: React.SFC<RoutesState> = ({ auth }) => {
    return (
        <React.Fragment>
            <PrivateRoute
                path="/"
                exact
                component={App}
                auth={auth.authenticated}
            />
            <Route path="/login" exact component={Login} />
        </React.Fragment>
    );
};

const mapStateToProps = (state: RoutesState) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Routes);
