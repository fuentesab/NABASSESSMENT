exports.WAIT_TIMEOUT = 15000;
var p = protractor;
exports.EC = p.ExpectedConditions;
/**
 *  Returns a browser wait for an expected condition as a promise so that you can call .then() on it.
 *  eg. helper.wait(helper.EC.elementToBeClickable(something)).then(() => { return something.click(); })
 */
function wait(expectedCondition) {
    return browser.wait(expectedCondition, exports.WAIT_TIMEOUT);
}
exports.wait = wait;
// Wait for element to be clickable then click it
function click(element) {
    return wait(exports.EC.and(exports.EC.presenceOf(element), exports.EC.elementToBeClickable(element)))
        .then(function () { return element.click(); });
}
exports.click = click;
/**
 * Scroll vertically to ensure an element is in the viewport
 *
 * @param {protractor.ElementFinder} element
 * @returns {webdriver.promise.Promise<any>}
 */
function scrollTo(element) {
    return browser.executeScript('arguments[0].scrollIntoView()', element.getWebElement());
}
exports.scrollTo = scrollTo;
//# sourceMappingURL=Helper.js.map