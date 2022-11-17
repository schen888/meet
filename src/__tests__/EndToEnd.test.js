import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      //headless: false,
      //slowMo: 250, // slow down by 250ms
      //ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.Event .about-event');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.Event .show-details');
    const eventDetails = await page.$('.Event .about-event');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.Event .hide-details');
    const eventDetails = await page.$('.Event .about-event');
    expect(eventDetails).toBeNull();
  });
});


describe('Filter events by city.', () => {
  let browser;
  let page;
  jest.setTimeout(50000);
  beforeAll(async () => {
    browser = await puppeteer.launch({
      //headless: false,
      //slowMo: 250, 
      //ignoreDefaultArgs: ['--disable-extensions'], 
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });

  test('When user hasn\'t searched for a city, show upcoming events from all cities.', async () => {
    const countEvents = await page.$$eval(
      '.Event',
      (events) => events.length
    );
    expect(countEvents).toBe(2);
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Berlin', { delay: 100 }); 
    const countSuggestions = await page.$$eval(
      '.suggestions li',
      (element) => element.length
    );
    expect(countSuggestions).toBe(2);
  });

  test('User can select a city from the suggested list', async () => {
    await page.reload();
    await page.type('.city', 'Berlin', { delay: 100 });
    await page.click('.suggestions li');
    let element=await page.$('.Event .location');
    let value=await element.evaluate(el=>el.textContent);
    expect(value).toContain('Berlin');
  });
});