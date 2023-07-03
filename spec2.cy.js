describe('first block tests', () => {
    it('Test 1', () => {
      cy.visit('https://wallet-q-a.netlify.app')
  
      cy.get('[name="email"]').type("Artem.tester@gmail.com")
  
      cy.get('[name="password"]').type("Artemmm1");
  
      cy.get("[type='submit']").click();
  
    })
  })