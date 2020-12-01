@smoke
Feature: Search


    Scenario: Search

        Given I am on Onliner homepage
        When I enter "Смартфон Apple iPhone 12 Pro Max 256GB (тихоокеанский синий)" in Search field
        Then I click on "Смартфон Apple iPhone 12 Pro Max 256GB (тихоокеанский синий)" item
        Then I see "Смартфон Apple iPhone 12 Pro Max 256GB (тихоокеанский синий) title" block