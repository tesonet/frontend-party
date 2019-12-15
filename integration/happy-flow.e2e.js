test('Full flow, happy scenario', async () => {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  await page.evaluate(() => localStorage.clear());
  expect(await page.url()).toBe('http://localhost:3000/login');

  await setTextInputValue('[data-hook="password-input"]', 'partyanimal');
  await setTextInputValue('[data-hook="username-input"]', 'tesonet');

  await page.click('.submit-button');
  expect(await getAccessToken()).toBeDefined();

  await page.waitForSelector('.servers-table');
  expect(await page.url()).toBe('http://localhost:3000/servers');

  const firstServerName = await getTextContent('.servers-table tbody :first-child :first-child');
  await page.click('[data-hook="name-column-header"]');
  expect(await getTextContent('.servers-table tbody :last-child :first-child')).toBe(firstServerName);

  await page.click('[data-hook="logout-button"]');
  await page.waitForSelector('[data-hook="login-form"]');
  expect(await page.url()).toBe('http://localhost:3000/login');
  expect(await getAccessToken()).toBeFalsy();
});

async function setTextInputValue(selector, value) {
  await page.waitForSelector(selector);
  await page.click(selector);
  await page.keyboard.type(value);
}

function getTextContent(selector) {
  return page.evaluate(
    (selector) => document.querySelector(selector).textContent,
    selector
  );
}

function getAccessToken() {
  return page.evaluate(() => localStorage.getItem('my-token-key'));
}