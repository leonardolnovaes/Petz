/// <reference types="cypress" />

import Register from "../support/pages/Register";

describe("Register", () => {
  it("Create a new client in homepage", () => {
    Register.accessRegister();
    Register.fillData();
    Register.validadeRegistration();
  });
  it("Create a new client in loginpage", () => {
    Register.accessRegisterLogin();
    Register.fillData();
    Register.validadeRegistration();
  });
  
});
