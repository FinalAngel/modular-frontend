import puppeteer, { Browser } from "puppeteer";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

describe("image-snapshot", () => {
  let browser: Browser;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      defaultViewport: { width: 1024, height: 1200 },
      timeout: 0,
    });
  });

  afterAll(async () => {
    await browser.close();
  });

  it("renders correctly", async () => {
    const page = await browser.newPage();
    await page.goto("http://localhost:8000", { waitUntil: "networkidle0" });
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
