/// <reference types="cypress" />

import Checkout from '../support/pages/Checkout'
import Logon from '../support/pages/Logon'


describe('Checkout', () => {
    beforeEach(() => {
        Logon.accessLogin()
        Logon.fillLogin()
        Logon.validadeLogin()
    })
    it('Put a product in cart and show in checkout', () => {
        Checkout.chooseProduct()
        Checkout.viewCheckout()
    });
});