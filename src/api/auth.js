import { apiUrl } from "../config";
import api from "./index";

export function grantToken(data) {
  const url = `${apiUrl}/tokens`;
  const headers = { "Content-Type": "application/json" };
  return api.post(url, data, headers);
}
