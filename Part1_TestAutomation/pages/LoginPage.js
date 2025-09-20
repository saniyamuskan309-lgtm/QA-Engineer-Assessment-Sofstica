import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator('input#Email');
        this.passwordField = page.locator('input#Password');
        this.loginButton = page.locator('input[value="Log in"]');
    }

    async enterUsername(username) {
        await this.usernameField.fill(username);
    }

    async enterPassword(password) {
        await this.passwordField.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}
export { LoginPage };