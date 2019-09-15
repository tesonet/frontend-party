import {connect} from 'react-redux';
import LogoutButton from './logoutButton';

import {LOGOUT} from "../../Constants/Login";

const mapDispatchToProps = dispatch => {
    return {
        logoutRequest: (token) => {dispatch({type: LOGOUT, token: token})}
    }
};

export default connect(null, mapDispatchToProps)(LogoutButton);
