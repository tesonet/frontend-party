import "isomorphic-fetch";

const GetServers = async (token) => {
  const URL = 'http://playground.tesonet.lt/v1/servers'
  try {
    const resp = await fetch(URL, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    })
    return resp.json();
  } catch (err) {
    return new Error(err);
  }
}

export default GetServers;