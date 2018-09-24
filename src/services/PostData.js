export function PostData(URL, userData) {

  return new Promise((resolve, reject) => {

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => response.json())
      .then((res) => {
        console.log('NOT HORROR');
        resolve(res);
      })
      .catch((error) => {
        reject(error);
        console.log('HORROR');
      });


  });
}