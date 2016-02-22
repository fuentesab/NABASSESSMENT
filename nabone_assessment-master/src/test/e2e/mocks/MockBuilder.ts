/// <reference path="../../../../lib/typings/angularjs/angular.d.ts" />
/// <reference path="../../../../lib/typings/angularjs/angular-mocks.d.ts" />



module nabeone.test.e2e {

    interface IMockFunction {
        ($httpBackend: angular.IHttpBackendService): void;
    }

    export class MockBuilder {

        /**
         * Build mocks for injection in to browser
         *
         * @param funcs
         * @returns {Function}
         */
        static build(funcs: IMockFunction | IMockFunction[]) {

            var funcStr: string = "angular.module('httpBackendMock', ['ngMockE2E'])";

            if (Array.isArray(funcs)) {
                for (var i = 0; i < funcs.length; i++) {
                    funcStr += "\r.run(" + funcs[i] + ")";
                }
            } else {
                funcStr += "\r.run(" + funcs + ")";
            }

            return Function(funcStr);

        }

    }

}

export = nabeone.test.e2e.MockBuilder;