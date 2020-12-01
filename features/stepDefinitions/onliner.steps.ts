import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import chai = require('chai');
import { OnlinerPage } from "../pageObjects/onliner.page";

export = function cventSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Loading Event Page Object
    let onliner = new OnlinerPage;

    //Unique identifier    
    let uniqueIndentifier: string;

    //Swagger API Caller

    //Chai-as-Promised setup
    chai.use(require('chai-as-promised'));

    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

    //Step Definitions

    //Given expression, can only be used with Given in .feature file
    this.Given(/^I am on Onliner homepage$/, async () => {
        await browser.navigate().to(browser.params.onlinerByURL);
        await onliner.Loaded('Logo');
    });

    //Can only be used with When, Then, And expressions in .feature file
    this.When(/^I enter "(.*?)" in Search field/, async (value) => {
        await onliner.Search(value);
    });


    this.When(/^I click on "(.*?)" link/, async (value) => {
        await onliner.clickElement(value);
    });

    this.When(/^I click on "(.*?)" item/, async (value) => {
        await onliner.clickItem(value);
    });

    this.Then(/^I see "(.*?)" block/, async (text) => {
        await onliner.Loaded(text);
    });

    this.When(/^I hover "(.*?)" menu/, async (value) => {
        await onliner.hoverElement(value);
    });

    this.Then(/^I see "(.*?)" menu/, async (text) => {
        await onliner.Loaded(text);
    });
}