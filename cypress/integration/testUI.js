/// <reference types='Cypress' />

import { actions } from "../support/POM/allActions";

const fixtureData = require("../fixtures/fixturedata.json");
const { data, item } = fixtureData;


describe("The Home Page", () => {

  beforeEach("Login to page", () => {
    cy.visit("/");
    actions.login(data);
  });

  it("Buying 1 backpack item", () => {
    actions.addToCart(item.object);
    actions.checkCartValue(item.qty);
    actions.clickOnShoppingCart();
    actions.checkCart(item);
    actions.clickOnCheckout();
    actions.fillCheckoutInformation(data);
    actions.checkoutOverview(item);
    actions.checkItemTotal("$29.99");
  });
});