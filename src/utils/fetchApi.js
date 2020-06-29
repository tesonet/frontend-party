export const sendHttpRequest = (url, data) => {
  return fetch(url, {
    method: `POST`,
    body: JSON.stringify(data),
    headers: data ? { "Content-Type": `application/json` } : {}
  }).then((response) => {
    if (response.status >= 400) {
      return response.json().then((errorData) => {
        const error = new Error(errorData.message);
        throw error;
      });
    }
    return response.json();
  });
};

export const getHttpRequest = (url, token) => {
  return fetch(url, {
    method: `GET`,
    headers: {
      "Content-Type": `application/json`,
      "Authorization": `${token}`
    }
  }).then((response) => {
    if (response.status >= 400) {
      return response.json().then((errorData) => {
        const error = new Error(errorData.message);
        throw error;
      });
    }
    return response.json();
  });
};
