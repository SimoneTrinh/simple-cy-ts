import { BasePage } from "../../base_page";
import { ProductDetailPage } from "../product_detail/product_detail_page";

export class SearchResultPage extends BasePage {
  constructor(cy: Cypress.cy & CyEventEmitter, domain: string) {
    super(cy, domain);
  }
  private imgItem: string = `//div[@id='search']//div[a]`;

  verifyShowItem() {
    this.waitForElementVisible(this.imgItem);
  }
  clickProduct(productName: string) {
    this.clickElement(
      `//span[normalize-space()='${productName}']/../preceding-sibling::div`
    );
    return new ProductDetailPage(this.cy, this.domain);
  }
}
