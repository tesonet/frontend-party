const formatOptions = (body) => (
  {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
);

export const handleJson = async (response) => {
  let body = {};
  try {
    body = await response.json();
  } catch (err) {
    return body;
  }

  // not sure if this is needed
  // should handle cases where status is 200 ok, but contain an error attribute;
  const { error } = body;
  if (error) throw new Error(error);

  return body;
}


export const post = async (url, body) => {
  return fetch(url, {
    ...formatOptions(body),
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
    .then(data => data)
}

export const get = async (url, options = {}) => {
  return fetch(url, {
    ...options,
    method: 'GET',
  }).then(response => response.json())
    .then(data => data)
}