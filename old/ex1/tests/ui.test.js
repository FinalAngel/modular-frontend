import puppeteer from "puppeteer";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

describe("image-snapshot", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      defaultViewport: { width: 1024, height: 1048 },
      timeout: 0,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it("renders correctly", async () => {
    await page.goto("http://localhost:8000", { waitUntil: "load" });
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
