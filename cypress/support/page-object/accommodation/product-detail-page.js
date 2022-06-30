/// <reference types="cypress" />

import { ROOM_AVAILABLE_BUTTON, SUPERIOR_ROOM } from '../common/selector/accommodation';

class ProductDetailPage {
  clickSeeRoomAvailableButton() {
    cy.get(ROOM_AVAILABLE_BUTTON).click();
  }

  selectSuperiorRoom() {
    cy.get(SUPERIOR_ROOM).click();
  }
}
export default ProductDetailPage;
