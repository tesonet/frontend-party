import { connect } from 'react-redux';

const connectState = connect(({ app }) => ({
    isAuthenticating: app.isAuthenticating
}));

export default connectState;
