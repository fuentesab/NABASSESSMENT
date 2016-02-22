///<reference path="../../../lib/typings/angularjs/angular-resource.d.ts"/>
///<reference path="../../../lib/typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/burgerMenu.ts" />
var nabone;
(function (nabone) {
    var burger;
    (function (burger) {
        var burgerMenuService = (function () {
            function burgerMenuService($resource) {
                this.$resource = $resource;
            }
            burgerMenuService.prototype.getBurgerMenu = function () {
                return this.$resource('/api/burgermenus');
            };
            burgerMenuService.$inject = ["$resource"];
            return burgerMenuService;
        })();
        burger.burgerMenuService = burgerMenuService;
        angular
            .module('nabone.burger')
            .service("burgerMenuService", burgerMenuService);
    })(burger = nabone.burger || (nabone.burger = {}));
})(nabone || (nabone = {}));
//# sourceMappingURL=burgerMenuService.js.map