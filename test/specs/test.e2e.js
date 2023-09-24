import { expect, browser } from "@wdio/globals"
// import LoginPage from "../pageobjects/login.page.js"
// import SecurePage from "../pageobjects/secure.page.js"
const HomePage = require("../pageobjects/guru99_home.page")

describe("My Login application", () => {
  it("should open google", async () => {
    await HomePage.open()
    // await expect(browser).toHaveUrl("https://www.google.com/")
    // let searchField = await $(`textarea[@id='APjFqb']`)
    // await LoginPage.open()
    // await LoginPage.login("tomsmith", "SuperSecretPassword!")
    // await expect(SecurePage.flashAlert).toBeExisting()
    // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //   "You logged into a secure area!"
    // )
  })

  // it("search field and search button should be existing", async () => {
  //   let searchField = await $(`textarea[id='APjFqb']`)
  //   let searchBtn = await $(
  //     `//div[@class='FPdoLc lJ9FBc']/center/input[@class='gNO89b']`
  //   )
  //   await expect(searchField).toBeExisting()
  //   await expect(searchBtn).toBeExisting()
  // })

  // it("should be able to search", async () => {
  //   let searchField = await $(`textarea[id='APjFqb']`)
  //   let searchBtn = await $(
  //     `//div[@class='FPdoLc lJ9FBc']/center/input[@class='gNO89b']`
  //   )

  //   await searchField.setValue("Kervin Pagtalunan")
  //   await searchBtn.click()
  // })

  // it("should be able to redirect to search and result page", async () => {
  //   await expect(browser).toHaveUrlContaining(
  //     "https://www.google.com/search?q="
  //   )
  // })

  // it("search bar must display the searched item", async () => {
  //   let searchField = await $(`textarea[id='APjFqb']`)

  //   await expect(searchField).toHaveText("Kervin Pagtalunan")
  // })
})
