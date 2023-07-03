describe('first block tests', () => {
  it('Test 1', () => {
    cy.visit('https://www.edu.goit.global/ru/account/login')

    cy.get('[name="email"]').type("artem.benefis@gmail.com")

    cy.get('[name="password"]').type("Artale19981991");

    cy.get("[type='submit']").click();

    cy.get('[id="go-to-the-courses-widget"]').scrollIntoView().should("be.visible")
  })

  it('Test 2', () => {
    cy.visit('https://www.edu.goit.global/ru/account/login')

    cy.get("[type='submit']").should("have.text", "Log in");

    cy.get("[type='submit']").should("have.css", "background-color", "rgb(255, 107, 10)");
  })
})