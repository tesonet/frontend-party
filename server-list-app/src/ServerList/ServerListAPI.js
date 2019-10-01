import Authentication from "../Utils/Authentication"
import APIUrls from "../Utils/APIUrls"

class ServerListAPI {

    static retrieveServerList() {
        const url = APIUrls.ServerListUrl;
    
        return fetch(url, {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + Authentication.getStoredToken()
          }
        }).then(httpResponse => {
          if (httpResponse.status !== 200) {
            return [];
          }
          const serverList = httpResponse.json();
          return serverList;
        },
          error => {
            return [];
          });
      }    

}

export default ServerListAPI;