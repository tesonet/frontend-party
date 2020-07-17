import { apiUrl } from "../config";
import api from "./index";

export function fetchServers() {
  const url = `${apiUrl}/servers`;
  return api.get(url, { "Content-Type": "application/json" });
}
