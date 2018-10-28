import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { login, clearLoginError } from './authActions'
import AuthPage from './Components/AuthPage'

const mapDispatchToProps = dispatch => ({
    login: token => dispatch(login(token)),
    clearLoginError: () => dispatch(clearLoginError())
})

export const mapStateToProps = state => ({
    withAuth: state.authReducer.withAuth,
    loginError: state.authReducer.loginError
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthPage))