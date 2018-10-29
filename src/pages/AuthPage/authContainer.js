import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { login, clearLoginError } from './authActions'
import routes from '../../constants/routes'
import AuthPage from './Components/AuthPage'


const mapDispatchToProps = dispatch => ({
    login: token => dispatch(login(token)),
    clearLoginError: () => dispatch(clearLoginError()),
    redirectToAuthHomePage: () => dispatch(push(routes.SERVERS))
})

export const mapStateToProps = state => ({
    withAuth: state.authReducer.withAuth,
    loginError: state.authReducer.loginError
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)