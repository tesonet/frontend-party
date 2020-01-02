module.exports = function () {
  return actor({
    login(username, password) {
      this.amOnPage('/');
      this.fillField('Username', username);
      this.fillField('Password', password);
      this.click('Log In');
    },
  });
};
