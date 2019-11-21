export const mapApiResponse = (response) => ({
  response: response.data,
});

export const mapApiError = (error) => ({
  error,
});
