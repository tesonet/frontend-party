export default function postData(url, data) {
  return fetch(url, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }).then(async response => {
    const body = await response.json();
    if (response.status !== 200) {
      return { error: body.message };
    }
    return body;
  });
}
