import { BasePage } from "../../base_page";

export class CartPage extends BasePage {
  constructor(cy: Cypress.cy & CyEventEmitter, domain: string) {
    super(cy, domain);
  }

  private btnCheckout: string = `//button[@name='checkout']`;

  verifyRedirectToCart(){
    this.waitForElementVisible(this.btnCheckout);
  }
  clickButtonCheckout(){
    this.clickElement(this.btnCheckout);
  }
}
