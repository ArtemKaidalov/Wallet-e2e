import { LoginPage } from "./Pages/Login"

const loginPage = new LoginPage()

describe("Page obj examole", () => {
    it("Login page", () => {

        loginPage.navigateToPage();

        loginPage.validateInput();

        loginPage.validateLoginTitle();
        
        loginPage.validateSingupButtom();
    })
})