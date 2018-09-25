export function GetData(URL, token) {

  return new Promise((resolve, reject) => {
    fetch(URL, {
      method: 'GET',
      headers: { 'Authorization': token }
    })
      .then((response) => {
        if (response.ok) {
          resolve(response.json());
        }
        else {
          console.log("Incorrect token: " + response.statusText);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}