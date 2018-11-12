import { connect } from 'react-redux';

const connectState = connect(({ app: { authenticated } }) => ({
    authenticated
}));

export default connectState;
