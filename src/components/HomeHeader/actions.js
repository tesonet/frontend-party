import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import actionList from "../../common/actionList";

export default function () {
    const history = useHistory()
    const dispatch = useDispatch()
    return {
        handleLogout: () => {
            localStorage.removeItem('token')
            dispatch(actionList.setServers([]))
            dispatch(actionList.setCredentials({}))
            dispatch(actionList.setIsLoggedIn(false))
            history.push('/')
        }
    }
}