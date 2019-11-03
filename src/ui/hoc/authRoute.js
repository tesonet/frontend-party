import React from 'react';
import PropTypes from 'prop-types';

// React router
import { Route, Redirect } from 'react-router-dom';

// Redux
import { compose } from 'redux';

// Hoc
import withUser from './withUser';

/**
 * Authentication Route component
 */
class AuthRoute extends React.Component {
    static propTypes = {
        user: PropTypes.object,
        path: PropTypes.string.isRequired,
        render: PropTypes.func,
        component: PropTypes.func,
    };

    render() {
        const { user } = this.props;

        return user === undefined ? (
            // If user is currently logging in
            null
        ) : (
            <>
                {
                    user === null ? (
                        <Redirect to={'/login'} push />
                    ) : (
                        <Route {...this.props} />
                    )}
                }
            </>
        );
    }
}

export default compose(
    withUser({})
)(AuthRoute);
