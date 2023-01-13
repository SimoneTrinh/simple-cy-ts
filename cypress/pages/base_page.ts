export class BasePage {
  cy: Cypress.cy & CyEventEmitter;
  readonly domain: string;
  constructor(cy: Cypress.cy & CyEventEmitter, domain: string) {
    this.cy = cy;
    this.domain = domain;
  }

  goto(path: string = "") {
    this.cy.visit("https://" + (this.domain + path));
    this.cy.waitForNetworkIdle(500);
  }
  getLocator(selector: string) {
    return this.cy.xpath(selector);
  }
  clickElement(xpathSelector: string) {
    this.getLocator(xpathSelector).click({ force: true });
  }
  inputText(xpathSelector: string, text: string) {
    this.getLocator(xpathSelector).type(text);
  }
  waitForElementVisible(selector: string) {
    return this.cy.xpath(selector).should("be.visible");
  }
}
