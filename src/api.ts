export const post = async (url: string, data: any) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const responseJson = await response.json();
  if (!response.ok) {
    throw new Error(responseJson.message);
  }
  return responseJson;
};

export const get = async (url: string, options?: any) => {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` },
    ...options
  });
  const responseJson = await response.json();
  if (!response.ok) {
    throw new Error(responseJson.message);
  }
  return responseJson;
};
