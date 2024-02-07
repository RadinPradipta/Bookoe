describe("template spec", () => {
  it("should be able to navigate between pages", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[href="/latest"]').click();
    cy.location("pathname").should("eq", "/latest");
    cy.go("back");
    cy.get('[href="/top-picks"]').click();
    cy.location("pathname").should("eq", "/top-picks");
    cy.get('[href="/"]').click();
    cy.get('[href="/latest"]').click();
    cy.get('[href="/top-picks"]').click();
    cy.get('[href="/"]').click();
    cy.location("pathname").should("eq", "/");
  });
});
