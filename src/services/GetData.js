export function GetData(URL, token) {

       return new Promise((resolve, reject) =>{
         
            fetch(URL, {
            method: 'GET',
            headers: {'Authorization': token}
          })
          .then((response) => {
            if(response.ok){
              console.log('RESPONSE OK');
              resolve(response.json());
            }
            else
            {
              throw new Error('Something went wrong...')
            }
          })
          .catch((error) => {
            reject(error);
            console.log('HORROR');
          });

  
      });
}

