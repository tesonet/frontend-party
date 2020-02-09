const url = "http://playground.tesonet.lt/v1/tokens";

const fetchAuth = async user => {
  const body = JSON.stringify({
    ...user
  });

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body
  });

  if (response.ok) {
    return await response.json();
  } else {
    const errMessage = `${response.status} ${response.statusText}`;
    throw new Error(errMessage);
  }
};

export default fetchAuth;
