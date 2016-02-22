///<reference path="../../lib/typings/angularjs/angular-resource.d.ts"/>
///<reference path="../../lib/typings/angularjs/angular.d.ts"/>
///<reference path="../../lib/typings/angularjs/angular-route.d.ts"/>

/**
 * nabOne Hamburger Activity App
 */
var main = angular.module('nabone.burger', ['ngResource','burgerMenuResourceMock', 'ngRoute']);

main.config(routeConfig);

routeConfig.$inject = ['$routeProvider'];

function routeConfig($routeProvider: ng.route.IRouteProvider): void {

    $routeProvider
        .when("/api/burgermenus",
            {
                templateUrl: "app/burgerMenu/burgerMenuView.html",
                controller: 'burgerMenuController as bm'
            })
        .otherwise("/api/burgermenus");
}
