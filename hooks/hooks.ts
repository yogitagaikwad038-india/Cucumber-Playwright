export {};

const path = require('path');
const cucumberModule = require(path.resolve(__dirname, '../../node_modules/@cucumber/cucumber'));
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
    headless: false
  });

  page = await browser.newPage();

  this.page = page;
});

After(async function () {

  await browser?.close();
});