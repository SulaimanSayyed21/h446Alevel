const puppeteer = require('puppeteer');

describe('Puppeteer Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Example Test', async () => {
    await page.goto('http://localhost:3000/test.html');

    // Perform your Puppeteer interactions and assertions here
    // For example:
    const pageTitle = await page.title();
    expect(pageTitle).toMatch('Test Page');

  
  });
});

