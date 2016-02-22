/// <reference path="../../../../lib/typings/angularjs/angular.d.ts" />
/// <reference path="../../../../lib/typings/angularjs/angular-mocks.d.ts" />
var nabone;
(function (nabone) {
    var test;
    (function (test) {
        var e2e;
        (function (e2e) {
            function testBurgerMenu($httpBackend) {
                var response = {
                    menu: [
                        {
                            title: 'Cheeseburger',
                            price: 2.50,
                            elements: [
                                'bun',
                                'cheese',
                                'bacon',
                                'patty',
                                'bun'
                            ]
                        },
                        {
                            title: 'Megaburger',
                            price: 5.50,
                            elements: [
                                'bun',
                                'tomato',
                                'lettuce',
                                'patty',
                                'bacon',
                                'bun'
                            ]
                        },
                        {
                            title: 'Regularburger',
                            price: 1.50,
                            elements: [
                                'bun',
                                'patty',
                                'bun'
                            ]
                        }
                    ]
                };
                $httpBackend.whenGET(new RegExp('api/burgermenus')).respond(response);
            }
            e2e.testBurgerMenu = testBurgerMenu;
        })(e2e = test.e2e || (test.e2e = {}));
    })(test = nabone.test || (nabone.test = {}));
})(nabone || (nabone = {}));
//# sourceMappingURL=burgerMenuMocks.js.map