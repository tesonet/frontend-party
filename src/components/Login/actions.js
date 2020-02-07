import api from "../../service/api";
import {useDispatch, useSelector} from "react-redux";
import actionList from './../../common/actionList'
import { validateAndAuthenticate } from "../../common/common";

export default function (history) {
    const dispatch = useDispatch()
    const credentials = useSelector(state => state.generalReducer.credentials)
    const failedLogin = useSelector(state => state.generalReducer.failedLogin)

    return {
        handleUsername:  (e) => {
            dispatch({type: 'SET_CREDENTIALS', payload: {name: e.currentTarget.value, pass: credentials.pass}})
        },
        handlePassword: (e) => {
            dispatch({type: 'SET_CREDENTIALS', payload: {name: credentials.name, pass: e.currentTarget.value}})
        },
        handleLogin: async function (e) {
            e.preventDefault()
            dispatch(actionList.enablePreloader())
            let response = await api.login(credentials.name, credentials.pass)
            dispatch(actionList.disablePreloader())
            validateAndAuthenticate(response, history, dispatch);
        },
        failedLogin
    }
}