import Page from "./page"
import { $, browser } from "@wdio/globals"

class HomePage extends Page {
  get registerBtn() {
    return $(`=REGISTER`)
  }

  open() {
    return super.open("index.php")
  }
}
// let homePage = new HomePage()
export default new HomePage()
