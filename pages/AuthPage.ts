import path from 'path';
import { expect, Page } from '@playwright/test';

export class AuthPage {
  constructor(private page: Page) {}

  async openApp() {
    const fixturePath = path.resolve(__dirname, '../fixtures/auth-demo.html');
    await this.page.goto(`file://${fixturePath}`);
    await this.page.locator('#login-form').waitFor({ state: 'visible' });
  }

  async login(username: string, password: string) {
    await this.page.fill('#login-username', username);
    await this.page.fill('#login-password', password);
    await this.page.click('#login-btn');
  }

  async register(fullName: string, email: string, password: string) {
    await this.page.click('#show-register');
    await this.page.locator('#register-form').waitFor({ state: 'visible' });
    await this.page.fill('#register-name', fullName);
    await this.page.fill('#register-email', email);
    await this.page.fill('#register-password', password);
    await this.page.click('#register-btn');
    await expect(this.page.locator('#message')).toContainText('Registration successful');
  }

  async proceedToNextStep() {
    await this.page.click('#next-step');
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator('#message')).toContainText('Login successful');
  }

  async verifyRegistrationSuccess() {
    await expect(this.page.locator('#message')).toContainText('Registration successful');
  }

  async verifyNextStep() {
    await expect(this.page.locator('#message')).toContainText('Next step completed');
  }
}
