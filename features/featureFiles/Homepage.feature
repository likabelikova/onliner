@smoke
Feature: Homepage


    Scenario: Redirect to 'Estate' page

        Given I am on Onliner homepage
        When I click on "Недвижимость" link
        Then I see "Estate News titles" block


    Scenario: Redirect to 'People' page

        Given I am on Onliner homepage
        When I click on "Люди" link
        Then I see "News titles" block


    Scenario: Redirect to 'Technologies' page

        Given I am on Onliner homepage
        When I click on "Технологии" link
        Then I see "Technologies News titles" block

    Scenario: Redirect to 'Homepage' page

        Given I am on Onliner homepage
        When I click on "Logo" link
        Then I see "Homepage News title" block

