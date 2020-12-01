import { by, element } from 'protractor';

//This class serves as  a storage for page elements, each page object has its own object repo class - i.e. "home.page.ts" have "homepage.obj.ts" and inherits it
export class onlinerRepository {
    readonly onlinerLogo = element(by.css(".onliner_logo"));
    readonly homepageNewsTitlesBlock = element(by.css(".b-tiles-outer"));
    readonly fastSearch = element(by.className("fast-search__input"));
    readonly peopleLink = element(by.xpath("//div[@class='b-main-page-grid-4 b-main-page-news-2']//a[text()='Люди']"));
    readonly newTitlesBlock = element(by.className("news-tiles"));
    readonly estateLink = element(by.xpath("//div[@class='b-main-page-grid-4 b-main-page-news-2']//a[text()='Недвижимость']"));
    readonly estateNewsTitlesBlock = element(by.className("news-tiles__wrapper"));
    readonly technologiesLink = element(by.xpath("//div[@class='b-main-page-grid-4 b-main-page-news-2']//a[text()='Технологии']"));
    readonly techNewsTitlesBlock = element(by.className("news-tiles__wrapper"));
    readonly aboutCompanyLink = element(by.xpath("//li[@class='footer-style__item']//a[contains(text(),'О компании')]"));
    readonly abountTitle = element(by.css(".news-header__title"));
    readonly contactsLink = element(by.xpath("//li[@class='footer-style__item']//a[contains(text(),'Контакты редакции')]"));
    readonly contactsTitle = element(by.css(".news-header__title"));
    readonly advertisingLink = element(by.xpath("//li[@class='footer-style__item']//a[contains(text(),'Реклама')]"));
    readonly adverisingTitle = element(by.css(".b2breg-advertising__header"));
    readonly forumLink = element(by.xpath("//li[@class='b-main-navigation__item']//span[contains(text(), 'Форум')]"));
    readonly forumTitle = element(by.css(".m-title"));
    readonly tasksLink = element(by.xpath("//li[@class='b-main-navigation__item']//span[contains(text(), 'Услуги')]"));
    readonly tasksTitle = element(by.css(".service-header"));
    readonly baraholkaLink = element(by.xpath("//li[@class='b-main-navigation__item']//span[contains(text(), 'Барахолка')]"));
    readonly baraholkaTitle = element(by.css(".m-title-i"));
    readonly newsMenu = element(by.xpath("//span[@class='b-main-navigation__text' and contains(text(), 'Новости')]"));
    readonly DropDownMenu = element(by.css(".b-main-navigation__dropdown.b-main-navigation__dropdown_visible"));
    readonly autoMenu = element(by.xpath("//span[@class='b-main-navigation__text' and contains(text(), 'Автобарахолка')]"));
    readonly iphoneTitle = element(by.css(".catalog-masthead__title"));

    //Iframe, needed to enter and find some elements in DOM, if you won't switch to it - you will have error "Element Not Found"
    readonly searchPopupIframe = element(by.css(".modal-iframe"));
   
    
    
  
    
}