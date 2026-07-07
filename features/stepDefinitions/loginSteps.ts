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

const { Given, When, Then } = cucumberModule;

const { FlightPage } = require('../../pages/FlightsPage');
const { SearchResultPage } = require('../../pages/SearchResultPage');
const { AuthPage } = require('../../pages/AuthPage');

let flightPage: any;
let resultPage: any;
let authPage: any;

Given('User opens the authentication demo page', async function (this: any) {
  authPage = new AuthPage(this.page);
  await authPage.openApp();
});

When('User logs in with username {string} and password {string}', async function (this: any, username: string, password: string) {
  await authPage.login(username, password);
});

When('User registers with full name {string} email {string} and password {string}', async function (this: any, fullName: string, email: string, password: string) {
  await authPage.register(fullName, email, password);
});

When('User proceeds to the next step', async function () {
  await authPage.proceedToNextStep();
});

Then('Login should be successful', async function () {
  await authPage.verifyLoginSuccess();
});

Then('Registration should be successful', async function () {
  await authPage.verifyRegistrationSuccess();
});

Then('The next step should be completed', async function () {
  await authPage.verifyNextStep();
});

Given('User launches PHP Travels flight page',async function (this: any) {

    flightPage = new FlightPage(this.page);

    resultPage = new SearchResultPage(this.page);

    await flightPage.navigate();
  }
);

When('User selects one way trip', async function () {

    await flightPage.selectOneWay();
  }
);

When('User selects round trip',async function () {

    await flightPage.selectRoundTrip();
  }
);

When('User selects multi city trip',async function () {

    await flightPage.selectMultiCity();
  }
);

When('User enters source city {string}', async function (this: any, city: string) {

    await flightPage.enterSourceCity(city);
  }
);

When('User enters destination city {string}',async function (this: any, city: string) {

    await flightPage.enterDestinationCity(city);
  }
);

When('User selects departure date',async function () {

    await flightPage.selectDepartureDate();
  }
);

When('User selects return date',async function () {

    await flightPage.selectReturnDate();
  }
);

When('User selects 2 adults',async function () {

    await flightPage.selectAdults(2);
  }
);

When('User selects 1 child',async function () {

    await flightPage.selectChildren(1);
  }
);

When('User selects business class',async function () {

    await flightPage.selectBusinessClass();
  }
);

When('User clicks search button',async function () {

    await flightPage.clickSearch();
  }
);

When('User performs flight search',async function () {

    await flightPage.selectOneWay();

    await flightPage.enterSourceCity('Pune');

    await flightPage.enterDestinationCity('Delhi');

    await flightPage.clickSearch();
  }
);

When('User sorts flights by price',async function () {

    await resultPage.verifyPriceSorting();
  }
);

When('User selects airline filter',async function () {

    await resultPage.verifyAirlineFilter();
  }
);

When('User selects first available flight',async function () {

    await flightPage.selectFirstFlight();
  }
);

When('User enters passenger details',async function () {

    await flightPage.enterPassengerDetails();
  }
);

When('User enters contact details',async function () {

    await flightPage.enterContactDetails();
  }
);

Then('Flight results should be displayed',async function () {

    await resultPage.verifyResultsDisplayed();
  }
);

Then('Verify results are displayed',async function () {

    await resultPage.verifyResultsDisplayed();
  }
);

Then('Flights should be sorted by ascending price',async function () {

    await resultPage.verifyPriceSorting();
  }
);

Then('Filtered flights should be shown',async function () {

    await resultPage.verifyAirlineFilter();
  }
);

Then('Booking summary should be displayed',async function () {

    await resultPage.verifyBookingSummary();
  }
);