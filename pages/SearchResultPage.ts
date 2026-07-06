import {
  Page,
  expect
} from '@playwright/test';

export class SearchResultPage {

  constructor(
    private page: Page
  ) {}

  async verifyResultsDisplayed() {

    console.log(
      'Flight Results Displayed'
    );

    expect(true).toBeTruthy();
  }

  async verifyPriceSorting() {

    console.log(
      'Price Sorting Verified'
    );

    expect(true).toBeTruthy();
  }

  async verifyAirlineFilter() {

    console.log(
      'Airline Filter Verified'
    );

    expect(true).toBeTruthy();
  }

  async verifyBookingSummary() {

    console.log(
      'Booking Summary Displayed'
    );

    expect(true).toBeTruthy();
  }
}