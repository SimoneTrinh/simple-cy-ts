import { BasePage } from "../../base_page";
import { CartPage } from "../cart/cart_page";

export class ProductDetailPage extends BasePage {
  constructor(cy: Cypress.cy & CyEventEmitter, domain: string) {
    super(cy, domain);
  }
  private btnAddToCart: string = `//div[@id='addToCartForm']//button[contains(@class,'add-cart')]`;

  verifyShowPDP() {
    this.waitForElementVisible(this.btnAddToCart);
  }
  clickBtnAddToCart() {
    this.clickElement(this.btnAddToCart);
    return new CartPage(this.cy, this.domain);
  }
}
