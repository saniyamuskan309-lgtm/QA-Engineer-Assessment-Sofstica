import { expect } from '@playwright/test';
import { LoginData } from '../test-data/users';

class DashboardPage {
    constructor(page) {
        this.page = page;
        this.logoutButton = page.locator("[href='/logout']");
    }
    async accessApplication() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async verifyHomePageTitle() {
        await expect(this.page).toHaveTitle(/Demo Web Shop/);
    }

    async verifyUserInfoVisible() {
        await expect(this.page.locator('a.account').nth(0)).toHaveText(LoginData.username);
    }

    async navigateToLoginPage() {
        await this.page.goto('https://demowebshop.tricentis.com/login');
    }

    async navigateToRegisterPage() {
        await this.page.goto('https://demowebshop.tricentis.com/register');
    }

    async verifyToLogout() {
        await this.logoutButton.click();
    }

}
export { DashboardPage };
