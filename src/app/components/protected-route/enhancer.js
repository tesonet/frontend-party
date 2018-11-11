import { connect } from 'react-redux';
import { compose } from 'recompose';

const connectState = connect(({ app: { authenticated } }) => ({
    authenticated
}));

export default compose(
    connectState
);
