exports.config = {

    directConnect: true,
    chromeDriver: '../../lib/selenium/chromedriver',
    framework: 'jasmine2',

    capabilities: {
        'browserName': 'chrome'
    },

    suites: {
        burger: 'e2e/specs/**/*.js'
    },

    allScriptsTimeout: 90000,

    getPageTimeout: 90000,

    onPrepare: function () {

        browser.ignoreSynchronization = false;
        browser.driver.manage().window().setSize(1280, 1024);

        require('jasmine-reporters');
        var mkdirp = require('mkdirp');
        var path = './build/test/results/integration/';

        mkdirp(path, function (err) {
        });

        jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(path, true, true));

        var SpecReporter = require('jasmine-spec-reporter');

        jasmine.getEnv().addReporter(new SpecReporter(
            {
                displayStacktrace: 'summary',    // display stacktrace for each failed assertion, values: (all|specs|summary|none)
                displayFailuresSummary: true, // display summary of all failures after execution
                displayPendingSummary: true,  // display summary of all pending specs after execution
                displaySuccessfulSpec: true,  // display each successful spec
                displayFailedSpec: true,      // display each failed spec
                displayPendingSpec: true,     // display each pending spec
                displaySpecDuration: true,    // display each spec duration
                displaySuiteNumber: false,    // display each suite number (hierarchical)
                colors: {
                    success: 'green',
                    failure: 'red',
                    pending: 'yellow'
                },
                prefixes: {
                    success: '(PASS) ',
                    failure: '(FAIL) ',
                    pending: '(PEND) '
                },
                customProcessors: []
            }
        ));

    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        isVerbose: true,
        includeStackTrace: true,
        showColors: false,
        defaultTimeoutInterval: 800000,
        getPageTimeout: 50000,
        allScriptsTimeout: 50000,

        // Hide Jasmine dots as reporting is done by Jasmine spec reporter
        print: function() {}
    }

};
