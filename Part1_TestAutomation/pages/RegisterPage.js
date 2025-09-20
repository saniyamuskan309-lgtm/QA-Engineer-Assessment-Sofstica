import { expect } from '@playwright/test';
import { ResgisterData } from '../test-data/users';

class RegisterPage {
    constructor(page) {
        this.page = page;
        this.field_FirstName = page.locator("input#FirstName");
        this.field_LastName = page.locator("input#LastName");
        this.field_registrationEmail = page.locator("input#Email");
        this.field_registrationPassword = page.locator("input#Password");
        this.field_confirmRegistrationPassword = page.locator("input#ConfirmPassword");
        this.SubmitBtn = page.locator("input#register-button");
        this.resultMessage = page.locator(".result");
    }

    async fillFirstName(FirstName) {
        await this.field_FirstName.fill(FirstName);
    }

    async fillLastName(LastName) {
        await this.field_LastName.fill(LastName);
    }

    async fillEmail(email) {
        await this.field_registrationEmail.fill(email);
    }

    async fillPassword(Password) {
        await this.field_registrationPassword.fill(Password);
    }

    async fillConfirmPassword(ConfirmPassword) {
        await this.field_confirmRegistrationPassword.fill(ConfirmPassword);
    }

    async ClickRegisterButton() {
        await this.SubmitBtn.click();
    }

    async verifySuccessfulRegistration() {
        await expect(this.resultMessage).toHaveText(/Your registration completed/i);
    }
}

export { RegisterPage };
