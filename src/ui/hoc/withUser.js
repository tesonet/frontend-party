import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

// React Redux
import { connect } from 'react-redux';

// Utils
import { getDisplayName } from './utils';

/**
 * Provides the following props from Redux:
 * User Global State
 * @param connectOptions - options object passed to react-redux connect()
 */
const withUser = ({ connectOptions = {} } = {}) => WrappedComponent => {
    const connectOptionsWithDefaults = {
        pure: true,
        forwardRef: false,
        ...connectOptions
    };
    WrappedComponent.propTypes = {
        ...WrappedComponent.propTypes,
        user: PropTypes.object,
    };

    const WrappedComponentConnected = connect(
        (state, ownProps) => {
            // mapStateToProps
            return {
                // ref: ownProps.forwardedRef,
                // forwardedRef: ownProps.forwardedRef,
                user: state.userState && state.userState.user,
            };
        },
        null,
        null,
        connectOptionsWithDefaults
    )(WrappedComponent);

    // explanation at https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
    hoistNonReactStatics(WrappedComponentConnected, WrappedComponent);

    WrappedComponentConnected.displayName = `withUser(${getDisplayName(WrappedComponent)})`;

    return WrappedComponentConnected;
};

export default withUser;
