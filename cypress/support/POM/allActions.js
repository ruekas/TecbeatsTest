/// <reference types= "Cypress"/>

class allActions {
  
    capitalize = (s) => {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    };
  
    login(data) {
      cy.get("[data-test=username]").type(data.username);
      cy.get("[data-test=password]").type(data.password);
      cy.get("[data-test=login-button]").click();
    }
  
    addToCart(item) {
      cy.get(`[data-test=add-to-cart-sauce-labs-${item}]`).click();
    }
  
    clickOnShoppingCart() {
      cy.get(".shopping_cart_link").click();
    }
  
    clickOnCheckout() {
      cy.get("[data-test=checkout]").click();
    }
  
    fillCheckoutInformation(data) {
      cy.get("[data-test=firstName]").type(data.firstName);
      cy.get("[data-test=lastName]").type(data.lastName);
      cy.get("[data-test=postalCode]").type(data.postalCode);
      cy.get("[data-test=continue]").click();
    }
  
    checkCart(data) {
      cy.get(".inventory_item_name").should("contain", data.object.charAt(0).toUpperCase() + data.object.slice(1));
      cy.get(".inventory_item_price").should("contain", data.price);
      cy.get(".cart_quantity").should("contain", data.qty);
    }
  
    checkoutOverview(data) {
      cy.get(".cart_quantity").should("contain", data.qty);
      cy.get(".inventory_item_price").should("contain", data.price);
    }
  
    checkItemTotal(value) {
      cy.get(".summary_subtotal_label").should("contain", value);
      cy.get("[data-test=finish]").click();
      cy.get(".complete-header").should("contain", "THANK YOU FOR YOUR ORDER");
    }
  
    checkCartValue(value) {
      cy.get(".shopping_cart_badge")
        .invoke("text")
        .then((text) => {
          expect(text).equal(value);
        });
    }
  }
  
  export const actions = new allActions();