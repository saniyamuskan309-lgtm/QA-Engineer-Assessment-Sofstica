import { expect } from '@playwright/test';

class CartPage {
    constructor(page) {
        this.page = page;
        this.cartCount = page.locator('.cart-qty'); // cart badge
        this.clickOnCart = this.page.locator('a.ico-cart:has(span.cart-label:has-text("Shopping cart"))');
        this.checkoutButton = page.locator('button#checkout');
        this.checkTermsConditions = page.locator('input#termsofservice');
    }

    async verifyCartQuantity(expectedQty) {
        await expect(this.cartCount).toHaveText(`(${expectedQty})`);
        console.log(`Cart badge shows the ${expectedQty} quantity`);
    }

    async navigateToShoppingCart() {
        await this.clickOnCart.click();
        console.log('Navigating to Shopping Cart');
    }

    async acceptTermsAndConditions() {
        await this.checkTermsConditions.check();
        console.log('Accepting terms and conditions');
    }

    async clickOnCheckoutButton() {
        await this.checkoutButton.click();
        console.log('Clicking on Checkout button');
    }
}

export { CartPage };
