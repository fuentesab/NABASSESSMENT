///<reference path="../../../lib/typings/angularjs/angular-mocks.d.ts"/>
/// <reference path="../typings/burgerMenu.ts" />
var nabone;
(function (nabone) {
    var burger;
    (function (burger_1) {
        var burger = (function () {
            function burger(title, price, elements) {
                this.title = title;
                this.price = price;
                this.elements = elements;
            }
            return burger;
        })();
        var mockResource = angular
            .module("burgerMenuResourceMock", ["ngMockE2E"]);
        mockResource.run(mockRun);
        mockRun.$inject = ["$httpBackend"];
        function mockRun($httpBackend) {
            var burgerMenus = [];
            var burgerMenu;
            burgerMenu = new burger('Cheeseburger', 2.50, ['bun', 'cheese', 'bacon', 'patty', 'bun']);
            burgerMenus.push(burgerMenu);
            burgerMenu = new burger('Megaburger', 5.50, [
                'bun',
                'tomato', 'lettuce', 'patty', 'bacon', 'bun'
            ]);
            burgerMenus.push(burgerMenu);
            burgerMenu = new burger('Regularburger', 1.50, [
                'bun',
                'patty', 'bun'
            ]);
            burgerMenus.push(burgerMenu);
            var burgerMenuUrl = '/api/burgermenus';
            $httpBackend.whenGET(burgerMenuUrl).respond(burgerMenus);
            // Pass through any requests for application files
            $httpBackend.whenGET(/app/).passThrough();
        }
    })(burger = nabone.burger || (nabone.burger = {}));
})(nabone || (nabone = {}));
//# sourceMappingURL=burgerMenuResourceMock.js.map