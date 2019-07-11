import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { RootState } from '../../root.reducer';
import { selectors as authSelectors } from '../../ducks/auth.duck';

type Props = {
    component: any;
};

type StateProps = {
    isAuthenticated: boolean;
};

const LoginRoute = ({ component: Component, isAuthenticated, ...rest }: Props & StateProps) => (
    <Route {...rest} render={props => (isAuthenticated ? <Redirect to="/" /> : <Component {...props} />)} />
);

const mapStateToProps = (state: RootState): StateProps => ({
    isAuthenticated: authSelectors.isAuthenticated(state.session),
});

export default connect(mapStateToProps)(LoginRoute);
