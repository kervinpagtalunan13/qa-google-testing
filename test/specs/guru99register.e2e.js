import { expect, browser } from "@wdio/globals"
const HomePage = require("../pageobjects/guru99_home.page")
// import homePage from "../pageobjects/guru99_home.page"

describe("Guru Register", () => {
  it("should open home page", async () => {
    await browser.url("https://demo.guru99.com/test/newtours/index.php")
  })
})
