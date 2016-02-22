/// <reference path="../../../../../lib/customTypings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="../../../../../lib/customTypings/selenium-webdriver/selenium-webdriver.d.ts" />
var helper = require('../../Helper');
var burgerMenuPage = (function () {
    function burgerMenuPage() {
    }
    Object.defineProperty(burgerMenuPage.prototype, "container", {
        get: function () {
            return element(by.css('body'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(burgerMenuPage.prototype, "pageHeading", {
        get: function () { return this.container.element(by.css('.navbar-brand')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(burgerMenuPage.prototype, "burgerMenuTitle", {
        get: function () { return this.container.element(by.css('.title')); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(burgerMenuPage.prototype, "burgerMenuPrice", {
        get: function () { return this.container.element(by.css('.price')); },
        enumerable: true,
        configurable: true
    });
    /**
     * Wait for the page to be rendered and ready to interact with
     * @returns {webdriver.promise.Promise<any>}
     */
    burgerMenuPage.prototype.wait = function () {
        return helper.wait(helper.EC.presenceOf(this.pageHeading));
    };
    return burgerMenuPage;
})();
module.exports = burgerMenuPage;
//# sourceMappingURL=burgerMenuPage.js.map