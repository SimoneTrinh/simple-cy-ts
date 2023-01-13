import { BasePage } from "../../base_page";
import { ProductOverviewPage } from "../product_overview/product_overview_page";
import { SearchResultPage } from "../search_result/search_result_page";

export class HomePage extends BasePage {
  constructor(cy: Cypress.cy & CyEventEmitter, domain: string) {
    super(cy, domain);
  }

  private btnlogin: string = `//a[text()='Log in']`;
  private btnSearch: string = `//div[@class='search-bar']`;
  private txbSearch: string = `//input[@name='q']`;
  private btnshop: string = `//a[@data-dropdown-rel='shop']`;

  clickButtonLogin() {
    this.clickElement(this.btnlogin);
  }
  clickButtonShop() {
    this.clickElement(this.btnshop);
    return new ProductOverviewPage(this.cy, this.domain);
  }
  clickButtonSearch() {
    this.clickElement(this.btnSearch);
    return new SearchResultPage(this.cy, this.domain);
  }

  inputToTxbSearch(searchText: string) {
    this.waitForElementVisible(this.txbSearch);
    this.inputText(this.txbSearch, searchText);
  }
}
