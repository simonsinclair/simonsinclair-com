beforeEach(() => {
  cy.visit('/');
  cy.injectAxe();
});

describe('The Home Page', () => {
  it('has "Simon Sinclair" in the title', () => {
    cy.title().should('contain', 'Simon Sinclair');
  });

  it('passes a11y tests', () => {
    cy.checkA11y();
  });

  it('matches the image snapshot', () => {
    cy.matchImageSnapshot();
  });
});
