const el = require('./elements').ELEMENTS

class Logon{
    accessLogin(){
        cy.visit(el.urlHome)
    }
    fillLogin(){
        //cy.get(el.componentLogin).trigger('mouseover')
        cy.contains(el.buttonComponent).click({force:true})
        cy.readFile('data.json').then((data) => {
            cy.get(el.email).type(data[data.length -1].email, {force:true})
            cy.get(el.password).type(data[data.length -1].password)
        })
        cy.get(el.showPass).should('be.visible').click()
    }

    validadeLogin(){
        cy.intercept('https://api.segment.io/v1/i', 'POST').as('realizeLogin')
        cy.get(el.buttonLogin).should('be.visible').click()
        cy.wait('@realizeLogin').then((res) => {
            console.log(res)
    })
}
    realizeLogout(){
        cy.contains(el.logoutLink).click({force: true}).url().should('eq', el.urlHome)
    }
}
export default new Logon()