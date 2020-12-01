import { browser, ExpectedConditions, promise, element, by, ElementFinder } from "protractor";
import { onlinerRepository } from "../objectsRepository/onliner.obj";

const defaultTimeout = 60000;

//This class serves as an actions list on the page can be made, one page equals one class file, i.e. "home.page.ts"
export class OnlinerPage {

    //Locators      
    readonly onlinerElements = new onlinerRepository;

    public async Loaded(key: string): promise.Promise<void> {
        const element = this.getVisibleElement(key);
        await browser.wait(ExpectedConditions.visibilityOf(element), defaultTimeout, `${key} not loaded`);
    }
    private getVisibleElement(key: string): ElementFinder {
        switch (key) {
            case "Logo":
                return this.onlinerElements.onlinerLogo;
            case "News titles":
                return this.onlinerElements.newTitlesBlock;
            case "Estate News titles":
                return this.onlinerElements.estateNewsTitlesBlock;
            case "Technologies News titles":
                return this.onlinerElements.techNewsTitlesBlock;
            case "About title":
                return this.onlinerElements.abountTitle;
            case "Send News title":
                return this.onlinerElements.contactsTitle;
            case "Advertising title":
                return this.onlinerElements.adverisingTitle;
            case "Forum title":
                return this.onlinerElements.forumTitle;
            case "Tasks title":
                return this.onlinerElements.tasksTitle;
            case "Baraholka title":
                return this.onlinerElements.baraholkaTitle;
            case "Homepage News title":
                return this.onlinerElements.homepageNewsTitlesBlock;
            case "Drop Down menu":
                return this.onlinerElements.DropDownMenu;
            case "Смартфон Apple iPhone 12 Pro Max 256GB (тихоокеанский синий) title":
                return this.onlinerElements.iphoneTitle;

            default: throw new Error(`Element ${key} is not defined`);
        }
    }
    private getHoveredElement(key: string): ElementFinder {
        switch (key) {

            case "Новости":
                return this.onlinerElements.newsMenu;
            case "Автобарахолка":
                return this.onlinerElements.autoMenu;

            default: throw new Error(`Element ${key} is not defined`);
        }
    }
    public async clickElement(key: string): promise.Promise<void> {
        const button = this.getClickableElement(key);
        await browser.wait(ExpectedConditions.visibilityOf(button), defaultTimeout, `${key} button not visible`);
        await button.click();

    }
    public async hoverElement(key: string): promise.Promise<void> {
         const element = this.getHoveredElement(key);
         await browser.wait(ExpectedConditions.visibilityOf(element), defaultTimeout, `${key} element not visible`);
         await browser.actions().mouseMove(element).perform();
    }

    private getClickableElement(key: string): ElementFinder {
        switch (key) {
            case "Люди":
                return this.onlinerElements.peopleLink;
            case "Недвижимость":
                return this.onlinerElements.estateLink;
            case "Технологии":
                return this.onlinerElements.technologiesLink;
            case "О компании":
                return this.onlinerElements.aboutCompanyLink;
            case "Реклама":
                return this.onlinerElements.advertisingLink;
            case "Контакты редакции":
                return this.onlinerElements.contactsLink;
            case "Форум":
                return this.onlinerElements.forumLink;
            case "Услуги":
                return this.onlinerElements.tasksLink;
            case "Барахолка":
                return this.onlinerElements.baraholkaLink;
            case "Logo":
                return this.onlinerElements.onlinerLogo;
            



            default: throw new Error(`Element ${key} is not defined`);
        }
    }

    public async clickItem(key: string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.presenceOf(this.onlinerElements.searchPopupIframe), defaultTimeout, "Iframe not loaded");
        //Check that Cvent Online Registration page loaded and you can proceed with next actions
        await browser.switchTo().frame(this.onlinerElements.searchPopupIframe.getWebElement());

        //in very rare cases you should put elements in page object directly, not via object repository, like in this case:
        //we need to search for a specific element by name and easiest way is to search via xpath with expression contains()
        let searchedElement = element(by.xpath(`//div[@class='product__title']/a[contains(text(),'${key}')]`));

        //Asserting that element is visible
        await browser.wait(ExpectedConditions.visibilityOf(searchedElement), defaultTimeout, `"${key}" item not found in Search Results`);

        await searchedElement.click();

        await browser.switchTo().window("");
    }


    public async Search(name: string): promise.Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(this.onlinerElements.fastSearch), defaultTimeout, "Fast Search not visible");
        await this.onlinerElements.fastSearch.sendKeys(name);
    }




}

