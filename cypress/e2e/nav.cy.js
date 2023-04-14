describe("Navigation Bar Functionality", () => {
  it("should navigate to the correct page when a link is clicked", () => {
    cy.visit("/");
    cy.get('.hidden--mobile').contains("Bio").click();
    cy.url().should("include", "/Bio");
    cy.get('.hidden--mobile').contains("Home").click();
    cy.url().should("not.include", "/Bio");
  });
});




