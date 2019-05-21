import "isomorphic-fetch";

const GetToken = async (user) => {
    const URL = 'http://playground.tesonet.lt/v1/tokens'
    try {
      const resp = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
    })
      return resp.json();
    } catch (err) {
      return new Error(err);
      }
 }

 export default GetToken;