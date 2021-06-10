/// <reference types="cypress" />

import Register from '../support/pages/Register'

describe('Registered', () => {
    it('Create a new client', () => {
        Register.accessRegister()
        Register.fillData()
        Register.validadeRegistration()
    });
});