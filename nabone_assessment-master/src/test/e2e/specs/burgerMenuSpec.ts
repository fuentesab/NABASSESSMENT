/// <reference path="../../../../lib/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../../lib/customTypings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="../../../../lib/customTypings/selenium-webdriver/selenium-webdriver.d.ts" />
/// <reference path="../mocks/burgerMenuMocks.ts" />

import helper = require('../Helper');
import burgerMenuPage = require('./pages/burgerMenuPage');
import MockBuilder = require('../mocks/MockBuilder');
//import BurgerMenuMocks = require('../mocks/burgerMenuMocks');
import BurgerMenuMocks = require('../mocks/burgerMenuMocks');

describe('Burger Menu', () => {

    var burgerPage: burgerMenuPage = new burgerMenuPage();

    beforeEach(() => {

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
    describe('Page layout', () => {
        it('WILL display the protractor test result', () => {
            expect(burgerPage.pageHeading.getText()).toEqual("nabOne Hamburger Project");
        });

        it('count the number of burgers > 1', () => {
            expect(element.all(by.repeater('burger in bm.burgerMenus')).count()).toBeGreaterThan(2);
        });

        it('tasty burger', () => {
            expect(
                element(
                    by.tagName('p')).getText()).toContainText('These burgers are very tasty!');
        });
    });
});