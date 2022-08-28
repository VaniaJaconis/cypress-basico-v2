Cypress.Commands.add('fillMandoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Vânia')
    cy.get('#lastName').type('Jaconis')
    cy.get('#email').type('vania@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})
