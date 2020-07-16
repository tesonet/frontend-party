import { apiUrl } from "../config";
import api from "./index";
import querystring from "querystring";

export function grantToken(data) {
  return api.post(
    `${apiUrl}/tokens`,
    // querystring.stringify({
    //   grant_type: "password",
    //   client_id,
    //   ...data,
    // }),
    data,
    {
      headers: {
        "Content-Type": "application/json",
        //"WWW-Authenticate": "Basic",
        //Accept: "application/json",
      },
      validateStatus: function (status) {
        return status === 200;
      },
    }
  );
}
