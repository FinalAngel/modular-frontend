import puppeteer from "puppeteer";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

describe("image-snapshot", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    page.setViewport({ width: 1024, height: 1000 });
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
