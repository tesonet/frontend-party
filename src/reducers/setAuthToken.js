export default (prevState = '', action) => {
  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      return action.authToken || '';
    default:
      return prevState;
  }
}