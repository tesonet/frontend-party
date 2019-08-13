import axios from "axios";
import _get from "lodash/get";
import { SET_SERVERS_LIST } from "./types";

const serversUrl = "http://playground.tesonet.lt/v1/servers";

export const getServersList: any = () => (dispatch: any) => {
    const token = localStorage.getItem("authToken");

    if (token) {
        axios
            .get(serversUrl, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                const payload = _get(res, "data", []);
                
                dispatch({
                    type: SET_SERVERS_LIST,
                    payload,
                });
            })
            .catch((err) => console.log(err));
    }
};
