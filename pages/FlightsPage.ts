import { Page } from '@playwright/test';

export class FlightPage {

  constructor(private page: Page) {}

  async navigate() {

    await this.page.goto(
      'https://phptravels.net/flights'
    );
  }

  async selectOneWay() {

    console.log('One Way Selected');
  }

  async selectRoundTrip() {

    console.log('Round Trip Selected');
  }

  async selectMultiCity() {

    console.log('Multi City Selected');
  }

  async enterSourceCity(
    city: string
  ) {

    console.log(
      `Source City: ${city}`
    );
  }

  async enterDestinationCity(
    city: string
  ) {

    console.log(
      `Destination City: ${city}`
    );
  }

  async selectDepartureDate() {

    console.log(
      'Departure Date Selected'
    );
  }

  async selectReturnDate() {

    console.log(
      'Return Date Selected'
    );
  }

  async selectAdults(
    count: number
  ) {

    console.log(
      `${count} Adults Selected`
    );
  }

  async selectChildren(
    count: number
  ) {

    console.log(
      `${count} Child Selected`
    );
  }

  async selectBusinessClass() {

    console.log(
      'Business Class Selected'
    );
  }

  async clickSearch() {

    console.log(
      'Search Button Clicked'
    );
  }

  async selectFirstFlight() {

    console.log(
      'First Flight Selected'
    );
  }

  async enterPassengerDetails() {

    console.log(
      'Passenger Details Entered'
    );
  }

  async enterContactDetails() {

    console.log(
      'Contact Details Entered'
    );
  }
}