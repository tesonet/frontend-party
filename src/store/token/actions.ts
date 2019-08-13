import axios from "axios";
import _get from "lodash/get";
import history from "../../routes/history";
import { SET_AUTH_TOKEN} from "./types";
import { LOGOUT } from "../login/types";

const tokenUrl = "http://playground.tesonet.lt/v1/tokens";

export const getAuthToken = (user: string, password: string) => (
    dispatch: any
) => {
    const fd = new FormData();

    fd.append("username", user);
    fd.append("password", password);

    axios.post(tokenUrl, fd).then((res) => {
        const token = _get(res, "data.token", "");

        if (token) {
            localStorage.setItem("authToken", token);
            dispatch({
                type: SET_AUTH_TOKEN,
                payload: token,
            });
            dispatch({
                type: "LOGIN",
                payload: true,
            });
            history.push("/");
        }
    });
};

export const logout = () => (dispatch: any) => {
    localStorage.removeItem('authToken');
    dispatch({
        type: LOGOUT,
    });
    history.push("/");
}