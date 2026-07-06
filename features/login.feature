
Feature: PHP Travels Flight Booking

  Scenario: One Way Flight Search

    Given User launches PHP Travels flight page


  @oneway
  Scenario: One Way Flight Search

    When User selects one way trip
    And User enters source city "Pune"
    And User enters destination city "Delhi"
    And User selects departure date
    And User clicks search button
    Then Flight results should be displayed

  @roundtrip
  Scenario: Round Trip Flight Search

    When User selects round trip
    And User enters source city "Mumbai"
    And User enters destination city "Bangalore"
    And User selects departure date
    And User selects return date
    And User clicks search button
    Then Flight results should be displayed

  @multicity
  Scenario: Multi City Flight Search

    When User selects multi city trip
    And User enters source city "Pune"
    And User enters destination city "Delhi"
    And User clicks search button
    Then Flight results should be displayed

  @adult
  Scenario: Search With Adult Count

    When User selects one way trip
    And User selects 2 adults
    And User clicks search button
    Then Flight results should be displayed

  @child
  Scenario: Search With Child Count

    When User selects one way trip
    And User selects 2 adults
    And User selects 1 child
    And User clicks search button
    Then Flight results should be displayed

  @business
  Scenario: Search With Business Class

    When User selects business class
    And User clicks search button
    Then Flight results should be displayed

  @results
  Scenario: Verify Flight Results

    When User performs flight search
    Then Verify results are displayed

  @sorting
  Scenario: Verify Price Sorting

    When User performs flight search
    And User sorts flights by price
    Then Flights should be sorted by ascending price

  @filter
  Scenario: Verify Airline Filters

    When User performs flight search
    And User selects airline filter
    Then Filtered flights should be shown

  @booking
  Scenario: Complete Flight Booking Flow

    When User performs flight search
    And User selects first available flight
    And User enters passenger details
    And User enters contact details
    Then Booking summary should be displayed

