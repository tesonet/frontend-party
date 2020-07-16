import { apiUrl } from "../config";
import api from "./index";

export function grantToken(data) {
  const url = `${apiUrl}/tokens`;
  return api.post(url, data, { "Content-Type": "application/json" });
}
