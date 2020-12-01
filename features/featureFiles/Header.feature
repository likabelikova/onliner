@smoke
Feature: Header


    Scenario: Redirect to 'Baraholka' page

        Given I am on Onliner homepage
        When I click on "Барахолка" link
        Then I see "Baraholka title" block


    Scenario: Redirect to 'Forum' page

        Given I am on Onliner homepage
        When I click on "Форум" link
        Then I see "Forum title" block


    Scenario: Redirect to 'Tasks' page

        Given I am on Onliner homepage
        When I click on "Услуги" link
        Then I see "Tasks title" block
    
   
   Scenario: Hovering 'News' menu

        Given I am on Onliner homepage
        When I hover "Новости" menu
        Then I see "Drop Down menu" menu

    
    Scenario: Hovering 'Auto' menu

        Given I am on Onliner homepage
        When I hover "Автобарахолка" menu
        Then I see "Drop Down menu" menu