//demo.test.js
describe('Browserstack Demo', () => {
    jest.setTimeout(50000);
    beforeAll(async () => {
    await page.goto('https://www.browserstack.com/')
    })
    
    it('Should Verify Forgot Password', async () => {
    await page.click('a[href="/users/sign_in"]');
    await page.waitForSelector('#user_email_login');
    await page.click('a[href="/users/password/new"]');
    await page.waitForSelector('input[id="user_email_login"]');
    await page.type('input[id="user_email_login"]','ok@example.com')
    await page.click('input[type="submit"]');
    await page.waitForSelector('p[class="bs-alert-text"]');
    const el = await page.$('p[class="bs-alert-text"]');
    const text = await page.evaluate(el => el.innerText, el);
    await expect(text).toContain("Password reset initiated");
    })
    })