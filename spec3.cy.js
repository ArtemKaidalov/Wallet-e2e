import { LoginPage } from "./Pages/Login"

const loginPage = new LoginPage()

describe("Page obj examole", () => {
    it("Login page", () => {
        // visit our website
        cy.visit("https://wallet-q-a.netlify.app");

        cy.get('[class="Logo_title__xuJP2"]').should("be.visible");
        cy.get('[class="Logo_title__xuJP2"]').should("have.text", "Wallet");

        cy.get('[name="email"]').should("be.visible");
        cy.get('[name="password"]').should("be.visible");

        cy.get('[href="/register"]').should("be.visible");

    })
})