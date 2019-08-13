import axios from "axios";
import _get from "lodash/get";
import history from "../../routes/history";
import { LOGIN, LOGOUT } from "./types";

const tokenUrl = "http://playground.tesonet.lt/v1/tokens";

export const loginUser = (user: string, password: string) => (
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
                type: LOGIN,
            });
            history.push("/");
        }
    });
};

export const logout = () => (dispatch: any) => {
    localStorage.removeItem("authToken");
    dispatch({
        type: LOGOUT,
    });
    history.push("/");
};
