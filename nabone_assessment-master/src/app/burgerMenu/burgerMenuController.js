/// <reference path="../../../lib/typings/angularjs/angular.d.ts" />
/// <reference path="../typings/burgerMenu.ts" />
/// <reference path="../burgerMenu/burgerMenuService.ts" />
var nabone;
(function (nabone) {
    var burger;
    (function (burger) {
        var burgerMenuController = (function () {
            function burgerMenuController(burgerMenuService) {
                var _this = this;
                this.burgerMenuService = burgerMenuService;
                this.tasty = true;
                var burgerMenuResource = burgerMenuService.getBurgerMenu();
                burgerMenuResource.query(function (data) {
                    _this.burgerMenus = data;
                    //console.log('this.burger: ' + data);
                });
            }
            burgerMenuController.$inject = ["burgerMenuService"];
            return burgerMenuController;
        })();
        burger.burgerMenuController = burgerMenuController;
        angular
            .module('nabone.burger')
            .controller("burgerMenuController", burgerMenuController);
    })(burger = nabone.burger || (nabone.burger = {}));
})(nabone || (nabone = {}));
//# sourceMappingURL=burgerMenuController.js.map