/// <reference path="../../../../lib/typings/angularjs/angular.d.ts" />
/// <reference path="../../../../lib/typings/angularjs/angular-mocks.d.ts" />

module nabone.test.e2e {
export function testBurgerMenu($httpBackend: angular.IHttpBackendService): void {

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


}}