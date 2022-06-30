/// <reference types="cypress" />

import { $4STAR_HOTEL_PRODUCT } from '../common/selector/accommodation';

class ProductPage {
  select4StarHotelInMelbourneArea() {
    cy.get('#categoryCheckboxHotel').click();
    cy.get('#categoryCheckbox5star4').click();
    cy.get($4STAR_HOTEL_PRODUCT).first().invoke('removeAttr', 'target').click();
  }
}
export default ProductPage;
