class Token {
  constructor(key = 'tesonet') {
    this.storage = window.localStorage;
    this.user = this.find();
    this.key = key;
  }

  find = () => {
    const json = this.storage.getItem(this.key);
    const data = JSON.parse(json);
    return data;
  }

  save = (user) => {
    const data = JSON.stringify(user);
    this.storage.setItem(this.key, data);
  }

  remove = () => {
    this.storage.removeItem(this.key);
  }
}

export default Token;