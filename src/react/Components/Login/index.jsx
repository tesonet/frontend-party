import {connect} from "react-redux";
import LoginPage from "./loginPage";
import {LOGIN_REQUEST} from "../../Constants/Login";

const mapDispatchToProps = dispatch => {
    return {
        loginRequest: (token) => {dispatch({type: LOGIN_REQUEST, token: token})}
    }
};

export default connect(null, mapDispatchToProps)(LoginPage);
