/// <reference types="cypress" />

import Checkout from '../support/pages/Checkout'
import Logon from '../support/pages/Logon'
import Register from '../support/pages/Register'


describe('Completed', () => {
    beforeEach(() => {
        Register.accessRegister()
        Register.fillData()
        Register.validadeRegistration()
        Logon.realizeLogout()
        Logon.fillLogin()
        Logon.validadeLogin()
    })
    it('Test complete', () => {
        Checkout.chooseProduct()
        Checkout.calculateFreight()
        Checkout.viewCheckout()
    });
});