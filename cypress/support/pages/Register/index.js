const el = require('./elements').ELEMENTS
const faker = require('faker-br');
var { DateTime } = require('luxon');


class Register{
    accessRegister(){
        cy.visit(el.urlHome)
        cy.get(el.acceptLGPD).click()        
        //cy.get(el.componentLogin).trigger('mouseover')
        cy.contains(el.createAccount).click({force:true})
        .url().should('eq', el.urlRegister)
    }
    accessRegisterLogin(){
        cy.visit(el.urlHome)
        cy.get(el.componentLogin).trigger('mouseover')
        cy.contains(el.buttonLogin).click({force:true})
        cy.contains(el.createAccountLogin).click()
        
    }
    fillData(){
        let passwordFaker = faker.internet.password(),
            sex = 'Masculino',
            ddd = '12',
            date = '10/05/2000',
            saveEmail = faker.internet.email()


        cy.get(el.physicalPerson).should('be.visible').check()
        cy.get(el.name).should('be.visible').type(faker.name.findName())
        cy.get(el.email).should('be.visible').type(saveEmail)
        cy.get(el.dddCel).should('be.visible').type(ddd)
        cy.get(el.numberCel).should('be.visible').type(faker.phone.phoneNumber())
        cy.get(el.dddTel).should('be.visible').type(ddd)
        cy.get(el.numberTel).should('be.visible').type(faker.phone.phoneNumber())
        cy.get(el.sexo).should('be.visible').select(sex)
        cy.get(el.birthDate).should('be.visible').type(date)
        cy.get(el.CPF).should('be.visible').type(faker.br.cpf())
        cy.get(el.password).should('be.visible').type(passwordFaker)
        cy.get(el.confirmPassword).should('be.visible').type(passwordFaker)
        cy.get(el.showPass).should('be.visible').check()
        cy.get(el.showPass2).should('be.visible').check()
        const filename = 'data.json'
        cy.readFile(filename).then((list) => {
            list.push({email: saveEmail, password: passwordFaker})
            // write the merged array
            cy.writeFile(filename, list)
        })

      }

    validadeRegistration(){
        cy.intercept(

            'https://sdk.iad-03.braze.com/api/v3/data/'
            ,'POST'
        ).as('createdUser')
        cy.get(el.buttonCreateNewAccount).should('be.visible').click()
        cy.wait('@createdUser').its('response').then(({response}) => {
            console.log(response)
        })
        cy.contains(el.closeModalSuccess).click()
        cy.visit(el.urlHome)
    }
}

export default new Register()