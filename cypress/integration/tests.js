describe('App', function() {
    it('front apage can be opened', function() {
      cy.visit('http://localhost:8000') 
      cy.contains('Welcome')
      cy.contains('Messages').click
      cy.contains('Messages')
    })
  })