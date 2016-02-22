/// <reference path="../../../../../lib/customTypings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="../../../../../lib/customTypings/selenium-webdriver/selenium-webdriver.d.ts" />




import helper = require('../../Helper');

class burgerMenuPage {
    get container(): protractor.ElementFinder {
        return element(by.css('body'));
    }
    get pageHeading(): protractor.ElementFinder { return this.container.element(by.css('.navbar-brand')); }

    get burgerMenuTitle(): protractor.ElementFinder { return this.container.element(by.css('.title')); }

    get burgerMenuPrice(): protractor.ElementFinder { return this.container.element(by.css('.price')); }

    constructor() {}

    /**
     * Wait for the page to be rendered and ready to interact with
     * @returns {webdriver.promise.Promise<any>}
     */
    public wait(): webdriver.promise.Promise<any> {
        return helper.wait(helper.EC.presenceOf(this.pageHeading));
    }

}

export = burgerMenuPage;