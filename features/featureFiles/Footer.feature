@smoke
Feature: Footer


    Scenario: Redirect to 'About' page

        Given I am on Onliner homepage
        When I click on "О компании" link
        Then I see "About title" block

    
    Scenario: Redirect to 'Advertising' page

        Given I am on Onliner homepage
        When I click on "Реклама" link
        Then I see "Advertising title" block

    
    Scenario: Redirect to 'Contacts' page

        Given I am on Onliner homepage
        When I click on "Контакты редакции" link
        Then I see "Send News title" block