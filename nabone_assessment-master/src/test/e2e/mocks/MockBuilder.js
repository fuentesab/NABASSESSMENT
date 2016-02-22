/// <reference path="../../../../lib/typings/angularjs/angular.d.ts" />
/// <reference path="../../../../lib/typings/angularjs/angular-mocks.d.ts" />
var nabeone;
(function (nabeone) {
    var test;
    (function (test) {
        var e2e;
        (function (e2e) {
            var MockBuilder = (function () {
                function MockBuilder() {
                }
                /**
                 * Build mocks for injection in to browser
                 *
                 * @param funcs
                 * @returns {Function}
                 */
                MockBuilder.build = function (funcs) {
                    var funcStr = "angular.module('httpBackendMock', ['ngMockE2E'])";
                    if (Array.isArray(funcs)) {
                        for (var i = 0; i < funcs.length; i++) {
                            funcStr += "\r.run(" + funcs[i] + ")";
                        }
                    }
                    else {
                        funcStr += "\r.run(" + funcs + ")";
                    }
                    return Function(funcStr);
                };
                return MockBuilder;
            })();
            e2e.MockBuilder = MockBuilder;
        })(e2e = test.e2e || (test.e2e = {}));
    })(test = nabeone.test || (nabeone.test = {}));
})(nabeone || (nabeone = {}));
module.exports = nabeone.test.e2e.MockBuilder;
//# sourceMappingURL=MockBuilder.js.map