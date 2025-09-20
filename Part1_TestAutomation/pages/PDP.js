import { expect } from '@playwright/test';

class PDP {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator("#add-to-cart-button-31");
    }

    async NavigateToProductPDP(ProductName) {
        const productLink = this.page.getByRole('link', { name: ProductName, exact: true });
        await productLink.waitFor({ state: 'visible' });
        await productLink.click();
        await expect(this.page.locator(`//h1[normalize-space()='${ProductName}']`)).toBeVisible();
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async verifyProductAddedToCart() {
        const cartNotification = this.page.locator(".bar-notification.success");
        await expect(cartNotification).toBeVisible();
        await expect(cartNotification).toContainText(
            "The product has been added to your shopping cart"
        );
    }
}

export { PDP };
