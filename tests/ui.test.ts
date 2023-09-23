const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

describe("image-snapshot", () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: "new",
      defaultViewport: { width: 1024, height: 1200 },
      timeout: 0,
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  it("renders correctly", async () => {
    const page = await browser.newPage();
    await page.goto("http://localhost:8000");
    await page.waitForTimeout(1000);
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
