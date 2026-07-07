import * as fs from 'fs';
import * as path from 'path';

const cucumberModule = (() => {
  const candidates = [
    path.resolve(process.cwd(), 'node_modules/@cucumber/cucumber'),
    path.resolve(__dirname, '../../node_modules/@cucumber/cucumber'),
    path.resolve(__dirname, '../../../node_modules/@cucumber/cucumber')
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return require(candidate);
    }
  }

  return require('@cucumber/cucumber');
})();

const { setWorldConstructor, World } = cucumberModule;

import {Browser,BrowserContext,Page} from '@playwright/test';

export class CustomWorld extends World {

browser!: Browser;

context!: BrowserContext;

page!: Page;

}

setWorldConstructor(CustomWorld);