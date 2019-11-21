export const mapApiResponse = (response) => ({
  response: response.data
});

export const mapApiError = (error) => {
  const { response: { status, statusText, data: { message } = {} } } = error;
  return ({
    error: {
      status,
      message: message || statusText
    }
  });
};
