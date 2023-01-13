import { BasePage } from "../../base_page";
import { ProductDetailPage } from "../product_detail/product_detail_page";

export class ProductOverviewPage extends BasePage {
  constructor(cy: Cypress.cy & CyEventEmitter, domain: string) {
    super(cy, domain);
  }

  verifyShowProduct(productName: string) {
    this.waitForElementVisible(`//span[normalize-space()='${productName}']`);
  }
  clickProduct(productName: string) {
    this.clickElement(
      `//span[normalize-space()='${productName}']/../preceding-sibling::div`
    );
    return new ProductDetailPage(this.cy, this.domain);
  }
}
