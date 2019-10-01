import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import LoginPresentation from "./Presentation/Login.js"

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPresentation)

export default Login;