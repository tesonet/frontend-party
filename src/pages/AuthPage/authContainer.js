import {connect} from 'react-redux'
import {login} from './authActions'
import AuthPage from './Components/AuthPage'

const mapDispatchToProps = (dispatch) => ({
    login: (token) => dispatch(login(token))
})

export default connect(null, mapDispatchToProps)(AuthPage)