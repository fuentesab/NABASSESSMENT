///<reference path="../../../lib/typings/angularjs/angular-mocks.d.ts"/>
/// <reference path="../typings/burgerMenu.ts" />

module nabone.burger {
    class burger implements IBurger {

        constructor(public title: string,
                    public price: number,
                    public elements: string[]) {

        }
    }

    var mockResource = angular
        .module("burgerMenuResourceMock",
            ["ngMockE2E"]);

    mockResource.run(mockRun);

    mockRun.$inject = ["$httpBackend"];
    function mockRun($httpBackend: ng.IHttpBackendService) : void {
        var burgerMenus: burger[] = [];
        var burgerMenu: burger;

        burgerMenu = new burger('Cheeseburger', 2.50, ['bun','cheese','bacon','patty','bun']);
        burgerMenus.push(burgerMenu);

        burgerMenu = new burger('Megaburger', 5.50, [
            'bun',
            'tomato','lettuce','patty','bacon','bun'
        ]);
        burgerMenus.push(burgerMenu);

        burgerMenu = new burger('Regularburger', 1.50, [
            'bun',
            'patty','bun'
        ]);
        burgerMenus.push(burgerMenu);

        var burgerMenuUrl = '/api/burgermenus';

        $httpBackend.whenGET(burgerMenuUrl).respond(burgerMenus);

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();

    }
}

