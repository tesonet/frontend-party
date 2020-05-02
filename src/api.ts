import { logout } from "./actions/loginActions";

export async function get(url: string, body) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(
    url,
    body ? { ...options, body: JSON.stringify(body) } : options
  );
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return await response.json();
}

export const authGet = dispatch => async (url: string) => {
  const token = localStorage.getItem("token");
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };
  const response = await fetch(url, options);
  if (response.status === 401) {
    logout(dispatch);
  }
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return await response.json();
};
