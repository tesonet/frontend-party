import { getToken } from '@/utils/localStorage';

const formatOptions = (body) => (
  {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
);

const handleBadResponse = (response) => {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response;
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

export const get = async (url) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: getToken(),
      "Content-Type": "application/json"
    }

  }).then(handleBadResponse)
    .then(response => response.json())
    .then(data => data)
}