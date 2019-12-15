

test('Full flow, happy scenario', async () => {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' })
  await page.evaluate(() => localStorage.clear());
  expect(await page.url()).toBe('http://localhost:3000/login');

  await setTextInputValue(page, '.password-input', 'partyanimal');
  await setTextInputValue(page, '.username-input', 'tesonet');

  await page.click('.submit-button');

  expect(await page.evaluate(() => localStorage.getItem('my-token-key'))).toBeDefined();

  await page.waitForSelector('.servers-table');

  expect(await page.url()).toBe('http://localhost:3000/servers');
});

async function setTextInputValue(page, selector, value) {
  await page.waitForSelector(selector);
  await page.click(selector);
  await page.keyboard.type(value);
}