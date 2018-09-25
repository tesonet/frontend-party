export function PostData(URL, userData) {

  return new Promise((resolve, reject) => {

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => {
        if (response.ok) {
          resolve(response.json());
        }
        else {
          console.log(response.statusText);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}