/// <reference path="../../../lib/typings/angularjs/angular.d.ts" />
/// <reference path="../typings/burgerMenu.ts" />
/// <reference path="../burgerMenu/burgerMenuService.ts" />

module nabone.burger {
    import burgerMenuService = nabone.burger.burgerMenuService;

    export class burgerMenuController {

        public tasty: boolean;

        title: string;
        price: number;
        elements: string[];
        burgerMenus: IBurger[];

        static $inject=["burgerMenuService"];
        constructor(private burgerMenuService: burgerMenuService) {
            this.tasty = true;
            var burgerMenuResource = burgerMenuService.getBurgerMenu();
            burgerMenuResource.query((data:IBurger[]) => {
                this.burgerMenus = data;
                //console.log('this.burger: ' + data);
            });
        }

    }
    angular
        .module('nabone.burger')
        .controller("burgerMenuController", burgerMenuController);

}
