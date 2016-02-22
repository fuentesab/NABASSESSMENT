export var WAIT_TIMEOUT = 15000;

// A Protractor ExpectedCondition is a type of function that returns a promise that resolves to a boolean
export interface ExpectedCondition { (): webdriver.promise.Promise<boolean> }

export interface IExpectedConditions {
    not(expectedCondition: ExpectedCondition): ExpectedCondition;
    and(...expectedConditions: ExpectedCondition[]): ExpectedCondition;
    or(...expectedConditions: ExpectedCondition[]): ExpectedCondition;
    alertIsPresent(): ExpectedCondition;
    elementToBeClickable(elementFinder: protractor.ElementFinder): ExpectedCondition;
    textToBePresentInElement(elementFinder: protractor.ElementFinder, text: string): ExpectedCondition;
    titleContains(title: string): ExpectedCondition;
    titleIs(title: string): ExpectedCondition;
    presenceOf(elementFinder: protractor.ElementFinder): ExpectedCondition;
    stalenessOf(elementFinder: protractor.ElementFinder): ExpectedCondition;
    visibilityOf(elementFinder: protractor.ElementFinder): ExpectedCondition;
    elementToBeSelected(elementFinder: protractor.ElementFinder): ExpectedCondition;
    invisibilityOf(elementFinder: protractor.ElementFinder): ExpectedCondition;
    presenceAndVisibilityOf(elementFinder: protractor.ElementFinder): ExpectedCondition;
    stalenessOrInvisibilityOf(elementFinder: protractor.ElementFinder): ExpectedCondition;
}

var p: any = protractor;
export var EC: IExpectedConditions = p.ExpectedConditions;

/**
 *  Returns a browser wait for an expected condition as a promise so that you can call .then() on it.
 *  eg. helper.wait(helper.EC.elementToBeClickable(something)).then(() => { return something.click(); })
 */
export function wait(expectedCondition: ExpectedCondition): webdriver.promise.Promise<any> {
    return browser.wait(expectedCondition, WAIT_TIMEOUT);
}

// Wait for element to be clickable then click it
export function click(element: protractor.ElementFinder) {
    return wait(EC.and(EC.presenceOf(element), EC.elementToBeClickable(element)))
        .then(() => { return element.click(); });
}

/**
 * Scroll vertically to ensure an element is in the viewport
 *
 * @param {protractor.ElementFinder} element
 * @returns {webdriver.promise.Promise<any>}
 */
export function scrollTo(element: protractor.ElementFinder): webdriver.promise.Promise<any> {
    return browser.executeScript('arguments[0].scrollIntoView()', element.getWebElement());
}