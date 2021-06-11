const el = require("./elements").ELEMENTS;
const faker = require("faker-br");

class Checkout {
  chooseProduct() {
    cy.get(el.categoryDog)
      .should("be.visible")
      .click()
      .url()
      .should("eq", el.urlDog);
    cy.get(el.idProduct)
      .should("be.visible")
      .click()
      .url()
      .should("eq", el.urlProduct);
    cy.get(el.addCart)
      .should("be.visible")
      .click()
      .url()
      .should("eq", el.urlCart);
  }
  calculateFreight() {
    cy.get(el.buttonFreight).then((notVisible) => {
        if (notVisible.is(':visible')) {
          cy.get(el.buttonFreight).click();
          cy.get(el.cepCart).should("be.visible").type("03035-040");
        }
      });
      cy.wait(2000)
      cy.get(el.normalDelivery).click({ force: true });
      cy.wait(2000);
      cy.contains(el.continueCart)
        .click()
        .url()
        .should("eq", "https://www.petz.com.br/checkout");
  }
  viewCheckout() {

    cy.intercept(
      "https://www.petz.com.br/buscaEndereco_OneCheckOut.html?endereco.cep=12225-261&endereco.logradouro=&endereco.numero=&endereco.complemento=&endereco.bairro=&endereco.estado=&endereco.cidade=&endereco.referencia=&endereco.nome=",
      "GET"
    ).as("pushAddress");
    cy.intercept(
      "https://logs-01.loggly.com/inputs/27cf9a30-eb89-41a7-ba82-3280d33fb2cf/tag/https/",
      "POST"
    ).as("waitAddress");
    cy.get(el.address).then((data) => {
      if (data.is(":visible")) {
        cy.get(el.address).should("be.visible");
        cy.get(el.numberAddress).type("135");
        cy.get(el.district).should("be.visible");
        cy.get(el.state).should("be.visible");
        cy.get(el.city).should("be.visible");
        cy.get(el.nameAddress).should("be.visible").type("Casa");
        cy.get(el.continueCheckout).should("be.visible").click();
      }
    });
    cy.get(el.componentPayment).should('exist').and('be.visible')

  }
}
export default new Checkout();
