const database = {
  token: {
    create(token) {
      localStorage.setItem('token', token);
    },
    read() {
      localStorage.getItem('token');
    },
    remove() {
      localStorage.removeItem('token');
    }
  }
};

export default database;
