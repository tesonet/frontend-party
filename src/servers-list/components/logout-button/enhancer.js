import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { removeAuthTokenFromStorage, setAuthenticated } from '../../../app';

const onClickHandler = withHandlers({
    onClick: ({ dispatch, history }) => () => {
        removeAuthTokenFromStorage();
        dispatch(setAuthenticated(false));
        history.push('/login');
    }
});

export default compose(
    withRouter,
    connect(null),
    onClickHandler
);
