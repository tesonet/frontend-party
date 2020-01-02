Feature('Login');

Scenario('Successfully login to the app and then logout', (I) => {
  I.login('tesonet', 'partyanimal');
  I.waitForText('SERVER');
  I.waitForText('DISTANCE');
  I.click('Logout');
  I.waitForInvisible('Logout');
});

Scenario('Try to login with invalid credentials', (I) => {
  I.login('aaa', 'bbb');
  I.waitForText('Incorrect username or password');
});

Scenario('See validation errors displayed', (I) => {
  I.login('', '');
  I.waitForText('Please enter your username');
  I.waitForText('password is a required field');
});
