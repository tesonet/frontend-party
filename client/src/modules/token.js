const storage = window.localStorage;

class Token {
  constructor() {
    this.user = this.find();
  }

  fetch = () => {

  };

  find = () => {
    const json = storage.getItem(`tesonet`);
    const data = JSON.parse(json);
    return data;
  };

  save = (username, token) => {
    const data = JSON.stringify({ username, token });
    storage.setItem('tesonet', data);
  };

  remove = () => {
    storage.removeItem('tesonet');
  };
}

export default Token;