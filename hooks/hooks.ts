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

const {
  Before,
  After,
  setDefaultTimeout
} = cucumberModule;

const {
  chromium
} = require('@playwright/test');

setDefaultTimeout(30000);

let browser: any;
let page: any;

Before(async function (this: any) {

  browser = await chromium.launch({
    headless: true
  });

  page = await browser.newPage();

  this.page = page;
});

After(async function () {

  await browser?.close();
});