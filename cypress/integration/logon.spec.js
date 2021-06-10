/// <reference types="cypress" />

import Logon from '../support/pages/Logon'

describe('Logon', () => {
    it('Realize Login', () => {
        Logon.accessLogin()
        Logon.fillLogin()
        Logon.validadeLogin()
    });
});