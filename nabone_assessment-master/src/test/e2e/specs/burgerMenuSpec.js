/// <reference path="../../../../lib/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../../lib/customTypings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="../../../../lib/customTypings/selenium-webdriver/selenium-webdriver.d.ts" />
/// <reference path="../mocks/burgerMenuMocks.ts" />
var burgerMenuPage = require('./pages/burgerMenuPage');
var MockBuilder = require('../mocks/MockBuilder');
//import BurgerMenuMocks = require('../mocks/burgerMenuMocks');
var BurgerMenuMocks = require('../mocks/burgerMenuMocks');
describe('Burger Menu', function () {
    var burgerPage = new burgerMenuPage();
    beforeEach(function () {
        //Initialise browser window
        browser.driver.manage().window().setSize(1280, 1024);
        //Inject API mocks in to browser
        browser.addMockModule('httpBackendMock', MockBuilder.build([
            BurgerMenuMocks.testBurgerMenu
        ]));
        //Open the burger menu page
        browser.get('http://localhost:8082/build/index.html');
        //Wait for the page to be rendered and ready to interact with
        burgerPage.wait();
    });
    /**
     * Example test
     */
    describe('Page layout', function () {
        it('WILL display the protractor test result', function () {
            expect(burgerPage.pageHeading.getText()).toEqual("nabOne Hamburger Project");
        });
        it('count the number of burgers > 1', function () {
            expect(element.all(by.repeater('burger in bm.burgerMenus')).count()).toBeGreaterThan(2);
        });
        it('tasty burger', function () {
            expect(element(by.tagName('p')).getText()).toContainText('These burgers are very tasty!');
        });
    });
});
//# sourceMappingURL=burgerMenuSpec.js.map