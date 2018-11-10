import { connect } from 'react-redux';
import { compose } from 'recompose';

export default compose(
    connect(({ app: { authenticated } }) => ({
        authenticated
    }))
);
