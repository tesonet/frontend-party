import axios from "axios";
import _get from "lodash/get";
import history from "../../routes/history";
import store from "../index";
import { LOGIN, LOGOUT, LOGIN_ERROR, CLEAR_LOGIN_ERROR } from "./types";

const tokenUrl = "http://playground.tesonet.lt/v1/tokens";

export const loginUser = (user: string, password: string) => (
    dispatch: any
) => {
    const fd = new FormData();

    fd.append("username", user);
    fd.append("password", password);

    axios
        .post(tokenUrl, fd, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            const token = _get(res, "data.token", "");
            const loginStore = store.getState().auth;

            if (token) {
                localStorage.setItem("authToken", token);
                dispatch({
                    type: LOGIN,
                });
                if (loginStore.error) {
                    dispatch({
                        type: CLEAR_LOGIN_ERROR,
                    });
                }
                history.push("/");
            } else {
                dispatch({
                    type: LOGIN_ERROR,
                });
            }
        })
        .catch(() => {
            dispatch({
                type: LOGIN_ERROR,
            });
        });
};

export const logout = () => (dispatch: any) => {
    localStorage.removeItem("authToken");
    dispatch({
        type: LOGOUT,
    });
    history.push("/");
};
