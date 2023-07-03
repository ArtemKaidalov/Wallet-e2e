export class LoginPage {
    navigateToPage() {
        cy.visit("https://wallet-q-a.netlify.app");
    }

    validateLoginTitle() {
        cy.get('[class="Logo_title__xuJP2"]').should("be.visible");
        cy.get('[class="Logo_title__xuJP2"]').should("have.text", "Wallet");
    }

    validateInput() {
        cy.get('[name="email"]').should("be.visible");
        cy.get('[name="password"]').should("be.visible");
    }

    validateSingupButtom() {
        cy.get('[href="/register"]').should("be.visible");
    }
}