import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import authService from '../../services/auth.service';
import appRoutes from '../../app.routes';

const WithAuth = WrappedComponent =>
    class WithAuthentication extends Component {
        render() {
            if (!authService.isAuthenticated()) {
                return (
                    <Redirect
                        to={{
                            pathname: appRoutes.login.path,
                        }}
                    />
                );
            }

            return <WrappedComponent {...this.props} />;
        }
    };

export default WithAuth;
