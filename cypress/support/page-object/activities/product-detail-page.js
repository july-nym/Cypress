/// <reference types="cypress" />

import { BOOKNOW_BUTTON } from '../common/selector/activities';

class ProductDetailPage {
  clickBookNowButton() {
    cy.get(BOOKNOW_BUTTON).click();
  }
}
export default ProductDetailPage;
