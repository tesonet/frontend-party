export enum Api {
  token = "http://playground.tesonet.lt/v1/tokens"
}
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

export async function get(url: Api, body?) {
  const response = await fetch(
    url,
    body ? { ...options, body: JSON.stringify(body) } : options
  );
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return await response.json();
}
