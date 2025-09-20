import { expect } from '@playwright/test';
const { BillingAddressData, CreditCardDetails } = require('../test-data/users');

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameField = page.locator('#BillingNewAddress_FirstName');
        this.lastNameField = page.locator('#BillingNewAddress_LastName');
        this.emailField = page.locator('#BillingNewAddress_Email');
        this.countryDropdownB = page.locator('#BillingNewAddress_CountryId');
        this.stateDropdownB = page.locator('#BillingNewAddress_StateProvinceId');
        this.cityField = page.locator('#BillingNewAddress_City');
        this.address1Field = page.locator('#BillingNewAddress_Address1');
        this.zipField = page.locator('#BillingNewAddress_ZipPostalCode');
        this.phoneField = page.locator('#BillingNewAddress_PhoneNumber');
        this.continueButton = page.locator("input[onclick='Billing.save()']");
        this.continueShippingsaveBtn = page.locator("input[onclick='Shipping.save()']");
        this.billingAddressDropdown = page.locator('#billing-address-select');
        this.groundShippingOption = page.locator('#shippingoption_0');
        this.nextDayShippingOption = page.locator('#shippingoption_1');
        this.secondDayShippingOption = page.locator('#shippingoption_2');
        this.continueShippingMethod = page.locator("input[class='button-1 shipping-method-next-step-button']");
        this.COD = page.locator('input#paymentmethod_0');
        this.Check_MoneyOrder = page.locator('input#paymentmethod_1');
        this.creditCard = page.locator('input#paymentmethod_2');
        this.continuePayment = page.locator("input[class='button-1 payment-method-next-step-button']");
        this.purchaseOrderBtn = page.locator('input#paymentmethod_3');
        this.cardType = page.locator('#CreditCardType');
        this.cardHolderName = page.locator('#CardholderName');
        this.cardNumber = page.locator('#CardNumber');
        this.expireMonth = page.locator('#ExpireMonth');
        this.expireYear = page.locator('#ExpireYear');
        this.cardCode = page.locator('#CardCode');
        this.continuePaymentViaCard = page.locator("input[class='button-1 payment-info-next-step-button']");
        this.assertConfirmOrder = page.locator("//h2[normalize-space()='Confirm order']");
        this.confirmBtn = page.locator("input[value='Confirm']");
        this.ThankyouMessage = page.locator('h1', { hasText: 'Thank you' });
        this.orderNumberItem = page.locator('li', { hasText: 'Order number:' });
        this.lastBtn = page.locator("input[value='Continue']");
    }

    async selectAddNewAddress() {
        await this.billingAddressDropdown.selectOption({ label: 'New Address' });
    }

    async fillBillingAddress(BillingAddressData) {
        await this.firstNameField.fill(BillingAddressData.firstName);
        await this.lastNameField.fill(BillingAddressData.lastName);
        await this.emailField.fill(BillingAddressData.email);
        await this.countryDropdownB.selectOption({ label: BillingAddressData.country });

        if (await this.stateDropdownB.isVisible()) {
            await this.stateDropdownB.selectOption({ label: BillingAddressData.state });
        }
        await this.cityField.fill(BillingAddressData.city);
        await this.address1Field.fill(BillingAddressData.address1);
        await this.zipField.fill(BillingAddressData.zip);
        await this.phoneField.fill(BillingAddressData.phone);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickContinueShippingSave() {
        await this.continueShippingsaveBtn.click();
    }

    async selectShippingMethod(method = 'Ground (0.00)') {
        if (method === 'Ground (0.00)') {
            await this.groundShippingOption.check();
        } else if (method === 'Next Day Air (0.00)') {
            await this.nextDayShippingOption.check();
        } else if (method === '2nd Day Air (0.00)') {
            await this.secondDayShippingOption.check();
        }
    }

    async clickContinueShippingMethod() {
        await this.continueShippingMethod.click();
    }

    async selectPaymentMethod(method = 'Cash On Delivery (COD) (7.00)') {
        if (method === 'Cash On Delivery (COD) (7.00)') {
            await this.COD.check();
        } else if (method === 'Check / Money Order (5.00)') {
            await this.Check_MoneyOrder.check();
        } else if (method === 'Credit Card') {
            await this.creditCard.check();
        } else if (method === 'Purchase Order') {
            await this.purchaseOrderBtn.check();
        }
    }

    async clickContinuePaymentMethod() {
        await this.continuePayment.click();
    }

    async PaymentViaCreditCard(CreditCardDetails) {
        await this.cardType.selectOption({ label: CreditCardDetails.cardType });
        await this.cardHolderName.fill(CreditCardDetails.holderName);
        await this.cardNumber.fill(CreditCardDetails.cardNumber);
        await this.expireMonth.selectOption(CreditCardDetails.expireMonth);
        await this.expireYear.selectOption(CreditCardDetails.expireYear);
        await this.cardCode.fill(CreditCardDetails.cardCode);
    }

    async ContinueViaCard() {
        await this.continuePaymentViaCard.click();
    }

    async confirm() {

        await expect(this.assertConfirmOrder).toHaveText('Confirm order')
    }
    async clickConfirmOrder() {
        await this.confirmBtn.click();
    }

    async clickContinueLastBtn() {
        await this.lastBtn.click();
    }

    async verifyOrderConfirmation() {
        await expect(this.ThankyouMessage).toHaveText('Thank you');
        const orderText = await this.orderNumberItem.textContent();
        const orderNumber = orderText.replace('Order number:', '').trim();
        console.log(`Order confirmation message shows correctly the order number is "${orderNumber}"`);
    }
}
export { CheckoutPage };