import APIUrls from "./APIUrls.js"

class AuthenticationAPI {
  
  static retrieveToken(username, password) {
    const url = APIUrls.TokenUrl;
    const data = { username: username, password: password };

    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(httpResponse => {
      if (httpResponse.status !== 200) {
        return "";
      }
      const token = httpResponse.json();
      return token;
    },
      error => {
        return "";
      });
  }

}

export default AuthenticationAPI;