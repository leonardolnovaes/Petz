const el = require('./elements').ELEMENTS
const faker = require('faker-br');

class Checkout{

    chooseProduct(){
        cy.get(el.categoryDog).should('be.visible').click().url().should('eq', el.urlDog)
        cy.get(el.idProduct).should('be.visible').click().url().should('eq', el.urlProduct)
        cy.get(el.addCart).should('be.visible').click().url().should('eq', el.urlCart)

    }
    viewCheckout(){
        cy.contains(el.continueCart).should('be.visible').click()
        cy.get(el.cep).should('be.visible').type('03035-040')
        cy.get(el.address).should('be.visible')
        cy.get(el.numberAddress).type('135')
        cy.get(el.district).should('be.visible')
        cy.get(el.state).should('be.visible')
        cy.get(el.city).should('be.visible')
        cy.get(el.nameAddress).should('be.visible').type('Casa')
        cy.get(el.continueCheckout).should('be.visible')

        
}
}
export default new Checkout()