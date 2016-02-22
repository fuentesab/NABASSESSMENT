/// <reference path="angular-protractor.d.ts" />
function TestWebDriverExports() {
    var abstractBuilder = new protractor.AbstractBuilder();
    var baseAbstractBuilder = abstractBuilder;

    var button = new protractor.Button();
    var baseButton = button;

    var key = protractor.Key.ADD;
    var chord = protractor.Key.chord(protractor.Key.NUMPAD0, protractor.Key.NUMPAD1);

    var driver = new protractor.Builder().withCapabilities(protractor.Capabilities.chrome()).build();
    var baseDriver = driver;

    var action = new protractor.ActionSequence(driver);
    var baseAction = action;

    var alert = new protractor.Alert(driver, 'Message');
    var baseAlert = alert;

    var unhandledAlertError = new protractor.UnhandledAlertError('Message', alert);
    var baseUnhandledAlertError = unhandledAlertError;

    var browser = protractor.Browser.ANDROID;

    var builder = new protractor.Builder();
    var baseBuilder = builder;

    var capability = protractor.Capability.BROWSER_NAME;

    var capabilities = protractor.Capabilities.chrome();
    var baseCapabilities = capabilities;

    var commandName = protractor.CommandName.CLICK_ELEMENT;

    var command = new protractor.Command(protractor.CommandName.CLICK);
    var baseCommand = command;

    var eventEmitter = new protractor.EventEmitter();
    var baseEventEmitter = eventEmitter;

    var firefoxDomExecutor = new protractor.FirefoxDomExecutor();
    var baseFirefoxDomExecutor = firefoxDomExecutor;

    var webElement = new protractor.WebElement(driver, new protractor.promise.Promise());
    var baseWebElement = webElement;

    var locator = new protractor.Locator('id', 'ABC');
    var baseLocator = locator;

    var session = new protractor.Session('ABC', webdriver.Capabilities.android());
    var baseSession = session;

    locator = protractor.By.name('name');

    // logging module
    var levelName = protractor.logging.LevelName.ALL;
    var loggingType = protractor.logging.Type.CLIENT;

    var level = protractor.logging.Level.ALL;

    var entry = new protractor.logging.Entry(protractor.logging.Level.ALL, 'Message');
    var baseEntry = entry;

    level = protractor.logging.getLevel('DEBUG');

    protractor.logging.Preferences = { a: 123 };

    // promise module
    var promise = new protractor.promise.Promise();
    var basePromise = promise;

    var deferred = new protractor.promise.Deferred();
    var baseDeferred = deferred;

    var flow = new protractor.promise.ControlFlow();
    var baseFlow = flow;

    protractor.promise.asap(promise, function (value) {
        return true;
    });
    protractor.promise.asap(promise, function (value) {
    }, function (err) {
        return 'ABC';
    });

    promise = protractor.promise.checkedNodeCall(function (err, value) {
        return 123;
    });

    flow = protractor.promise.controlFlow();

    promise = protractor.promise.createFlow(function (newFlow) {
    });

    deferred = protractor.promise.defer(function () {
    });
    deferred = protractor.promise.defer(function (reason) {
    });

    promise = protractor.promise.delayed(123);

    promise = protractor.promise.fulfilled();
    promise = protractor.promise.fulfilled({ a: 123 });

    promise = protractor.promise.fullyResolved({ a: 123 });

    var isPromise = protractor.promise.isPromise('ABC');

    promise = protractor.promise.rejected({ a: 123 });

    protractor.promise.setDefaultFlow(new webdriver.promise.ControlFlow());

    promise = protractor.promise.when(promise, function (value) {
        return 123;
    }, function (err) {
        return 123;
    });

    // error module
    var errorCode = protractor.error.ErrorCode.ELEMENT_NOT_VISIBLE;
    var error = new protractor.error.Error(protractor.error.ErrorCode.ELEMENT_NOT_VISIBLE);
    var baseError = error;

    // process module
    var isNative = protractor.process.isNative();
    var value;

    value = protractor.process.getEnv('name');
    value = protractor.process.getEnv('name', 'default');

    protractor.process.setEnv('name', 'value');
    protractor.process.setEnv('name', 123);
}

function TestProtractor() {
    var ptor;
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

    ptor = new protractor.Protractor(driver);
    ptor = new protractor.Protractor(driver, 'baseUrl');
    ptor = new protractor.Protractor(driver, 'baseUrl', 'rootElement');
    ptor = protractor.getInstance();
    protractor.setInstance(ptor);

    ptor = protractor.wrapDriver(driver);
    ptor = protractor.wrapDriver(driver, 'baseUrl');
    ptor = protractor.wrapDriver(driver, 'baseUrl', 'rootElement');

    ptor = browser;

    driver = ptor.driver;
    var baseUrl = ptor.baseUrl;
    var rootEl = ptor.rootEl;
    var ignoreSynchronization = ptor.ignoreSynchronization;
    var params = ptor.params;

    ptor.debugger();

    var webElement = ptor.findElement(by.css('.class'));
    var promise;
    promise = ptor.findElements(by.css('.class'));
    promise = ptor.isElementPresent(by.css('.class'));
    promise = ptor.isElementPresent(webElement);

    ptor.clearMockModules();
    ptor.addMockModule('name', 'script');
    ptor.addMockModule('name', function () {
    });
    ptor.removeMockModule('name');
    ptor.waitForAngular();

    var elementFinder;
    var elementArrayFinder;

    elementFinder = ptor.element(by.id('ABC'));
    elementFinder = ptor.$('.class');

    elementArrayFinder = ptor.$$('.class');

    var locationAbsUrl = ptor.getLocationAbsUrl();
    ptor.setLocation('webaddress.com');

    promise = ptor.get('webaddress.com');
    promise = ptor.get('webdaddress.com', 45);
    ptor.refresh();
    ptor.refresh(45);
    var navigation = ptor.navigate();
    ptor.pause();
    ptor.pause(8080);
}

function TestElement() {
    var elementFinder = element(by.id('id'));
    var elementArrayFinder = element.all(by.className('class'));
}

function TestElementFinder() {
    var elementFinder = element(by.id('id'));
    var promise;

    promise = elementFinder.click();
    promise = elementFinder.allowAnimations('string');
    promise = elementFinder.sendKeys(protractor.Key.UP, protractor.Key.DOWN);
    promise = elementFinder.getTagName();
    promise = elementFinder.getCssValue('display');
    promise = elementFinder.getAttribute('atribute');
    promise = elementFinder.getText();
    promise = elementFinder.getSize();
    promise = elementFinder.getLocation();
    promise = elementFinder.isEnabled();
    promise = elementFinder.isSelected();
    promise = elementFinder.submit();
    promise = elementFinder.clear();
    promise = elementFinder.isDisplayed();
    promise = elementFinder.getOuterHtml();
    promise = elementFinder.getInnerHtml();
    promise = elementFinder.isElementPresent(by.id('id'));
    promise = elementFinder.$('.class');
    promise = elementFinder.$$('.class');
    promise = elementFinder.evaluate('expression');
    promise = elementFinder.isPresent();

    var webElement;
}

function TestElementArrayFinder() {
    var elementArrayFinder = element.all(by.id('id'));
    var promise;
    var elementFinder;

    var driverElementArray = elementArrayFinder.getWebElements();
    elementFinder = elementArrayFinder.get(42);
    elementFinder = elementArrayFinder.first();
    elementFinder = elementArrayFinder.last();
    promise = elementArrayFinder.count();
    promise = elementArrayFinder.asElementFinders_();
    elementArrayFinder.each(function (element) {
        // nothing
    });
    elementArrayFinder.map(function (element, index) {
        // nothing
    });
    elementArrayFinder.filter(function (element, index) {
        return element.getText().then(function (text) {
            return text === "foo";
        });
    });
    elementArrayFinder.reduce(function (accumulator, element) {
        return element.getText().then(function (text) {
            return accumulator + ',' + text;
        });
    }, '');
    elementArrayFinder.reduce(function (accumulator, element, index, array) {
        return element.getText().then(function (text) {
            return accumulator + ',' + text;
        });
    }, '');
    elementArrayFinder.then(function (underlyingElementFinders) {
        //nothing
    });
}

// This function tests the angular specific locator strategies.
function TestLocatorStrategies() {
    var ptor = protractor.getInstance();
    var webElement;

    // Protractor Specific Locators
    protractor.By.addLocator('customLocator', 'script');
    protractor.By.addLocator('customLocator2', function () {
        // nothing
    });
    webElement = ptor.findElement(protractor.By.binding('binding'));
    webElement = ptor.findElement(protractor.By.exactBinding('exactBinding'));
    webElement = ptor.findElement(protractor.By.model('model'));
    webElement = ptor.findElement(protractor.By.repeater('repeater'));
    webElement = ptor.findElement(protractor.By.repeater('repeater').column(0));
    webElement = ptor.findElement(protractor.By.repeater('repeater').row(0));
    webElement = ptor.findElement(protractor.By.repeater('repeater').row(0).column(0));
    webElement = ptor.findElement(protractor.By.buttonText('buttonText'));
    webElement = ptor.findElement(protractor.By.partialButtonText('partialButtonText'));
    webElement = ptor.findElement(protractor.By.cssContainingText('cssSelector', 'search text'));
    webElement = ptor.findElement(protractor.By.options('options'));
}
//# sourceMappingURL=angular-protractor-tests.js.map
