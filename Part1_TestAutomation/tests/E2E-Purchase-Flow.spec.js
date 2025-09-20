const { test, expect } = require('@playwright/test');
const { DashboardPage } = require('../pages/DashboardPage');
const { RegisterPage } = require('../pages/RegisterPage');
const { LoginPage } = require('../pages/LoginPage');
const { CartPage } = require('../pages/CartPage');
const { PLP } = require('../pages/PLP');
const { PDP } = require('../pages/PDP');
const { CheckoutPage } = require('../pages/CheckoutPage')
const { RegisterData, LoginData, BillingAddressData, CreditCardDetails } = require('../test-data/users.js');

let dashboard;
let register;
let login;
let plp;
let pdp;
let cart;
let checkout

test('E2E Purchase Flow: Register, Login, Dashboard, PLP, PDP, Cart, Checkout...', async ({ page }) => {
  dashboard = new DashboardPage(page);
  register = new RegisterPage(page);
  login = new LoginPage(page);
  plp = new PLP(page);
  pdp = new PDP(page);
  cart = new CartPage(page);
  checkout = new CheckoutPage(page);

  await dashboard.accessApplication();
  await dashboard.verifyHomePageTitle();
  await dashboard.navigateToRegisterPage();

  await register.fillFirstName(RegisterData.FirstName);
  await register.fillLastName(RegisterData.LastName);
  await register.fillEmail(RegisterData.email);
  await register.fillPassword(RegisterData.Password);
  await register.fillConfirmPassword(RegisterData.ConfirmPassword);
  await register.ClickRegisterButton();
  await register.verifySuccessfulRegistration();

  await dashboard.verifyToLogout();
  await dashboard.navigateToLoginPage();

  await login.enterUsername(LoginData.username);
  await login.enterPassword(LoginData.password);
  await login.clickLoginButton();
  await dashboard.verifyUserInfoVisible();

  await plp.clickOnCategory('Computers');
  await plp.verifyPageTitle('Computers');
  await plp.clickOnSubCategory('Notebooks');
  await plp.verifySubCategory('Notebooks');

  await pdp.NavigateToProductPDP('14.1-inch Laptop');
  await pdp.addToCart();
  await pdp.verifyProductAddedToCart();

  await cart.verifyCartQuantity(12); 
  await cart.navigateToShoppingCart();
  await cart.acceptTermsAndConditions()
  await cart.clickOnCheckoutButton();

  await checkout.selectAddNewAddress();
  await checkout.fillBillingAddress(BillingAddressData);
  await checkout.clickContinue();
  await checkout.clickContinueShippingSave();
  await checkout.selectShippingMethod('Ground (0.00)');  
  await checkout.clickContinueShippingMethod();
  await checkout.selectPaymentMethod('Credit Card');
  await checkout.clickContinuePaymentMethod();
  await checkout.PaymentViaCreditCard(CreditCardDetails);
  await checkout.ContinueViaCard();
  await checkout.confirm();
  await checkout.clickConfirmOrder();
  await checkout.verifyOrderConfirmation();
  await checkout.clickContinueLastBtn();
});
