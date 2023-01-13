import { CartPage } from "../../pages/modules/cart/cart_page";
import { HomePage } from "../../pages/modules/home/home_page";
import { ProductDetailPage } from "../../pages/modules/product_detail/product_detail_page";
import { ProductOverviewPage } from "../../pages/modules/product_overview/product_overview_page";
import { SearchResultPage } from "../../pages/modules/search_result/search_result_page";

let homePage: HomePage;
// let searchResultPage: SearchResultPage;
let popPage: ProductOverviewPage;
let pdpPage: ProductDetailPage;
let cartPage: CartPage;
const domain: string = Cypress.env("prod");

describe("Reg form", () => {
  it("enter some value", () => {
    homePage = new HomePage(cy, domain);
    homePage.goto();
    popPage = homePage.clickButtonShop();
    popPage.verifyShowProduct(`T-shirt Black as Your Day`);
    pdpPage = popPage.clickProduct(`T-shirt Black as Your Day`);
    pdpPage.verifyShowPDP();
    cartPage = pdpPage.clickBtnAddToCart();
    cartPage.verifyRedirectToCart();
    cartPage.clickButtonCheckout();
    // cartPage.cy.wait(15000);
  });
});

// // Unit under test
// describe("Transfer service", () => {
//   //Scenario
//   describe("When no credit", () => {
//     //Expectation
//     test("Then the response status should decline", () => {});

//     //Expectation
//     test("Then it should send email to admin", () => {});
//   });
// });
