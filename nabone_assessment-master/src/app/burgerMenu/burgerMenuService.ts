///<reference path="../../../lib/typings/angularjs/angular-resource.d.ts"/>
///<reference path="../../../lib/typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/burgerMenu.ts" />

module nabone.burger {

    interface IBurgerMenuService {
        getBurgerMenu(): ng.resource.IResourceClass<IBurgerMenuResource>;
    }

    interface IBurgerMenuResource
    extends ng.resource.IResource<IBurger>{

    }

    export class burgerMenuService implements IBurgerMenuService{

        static $inject = ["$resource"]
        constructor(private $resource: ng.resource.IResourceService){

        }

        getBurgerMenu(): ng.resource.IResourceClass<IBurgerMenuResource> {
            return this.$resource('/api/burgermenus');
        }

    }

    angular
        .module('nabone.burger')
        .service("burgerMenuService", burgerMenuService);
}
