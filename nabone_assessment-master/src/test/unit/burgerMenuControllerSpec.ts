describe("Burger Menu Controller", ()=>{

    var burgerMenuController: nabone.burger.burgerMenuController;
    var mockBurgerMenuService: nabone.burger.burgerMenuService;
    var $injector: angular.auto.IInjectorService;
    var $controller: angular.IControllerService;
    var bindings: any;

    /**
     * Create a controller instance for testing
     *
     * @param {any} bindToController Properties to be bound to the controller instance
     * @returns {nabone.burger.burgerMenuController}
     */
    function createController(bindToController: any = {}): nabone.burger.burgerMenuController {
        bindings = bindToController;
        return burgerMenuController = $controller<nabone.burger.burgerMenuController>(nabone.burger.burgerMenuController, {mockBurgerMenuService: mockBurgerMenuService}, bindings);
    }

    beforeEach(()=>{

        angular.mock.module("nabone.burger");
        angular.mock.inject((_$injector_: angular.auto.IInjectorService, _$controller_: angular.IControllerService) => {
            $injector = _$injector_;
            $controller = _$controller_;
        });

        mockBurgerMenuService = <nabone.burger.burgerMenuService> {};
        bindings = {};

    });

    it("Will contain tasty burgers", ()=>{

        createController({ tasty: true });

        expect(burgerMenuController.tasty).toEqual(true);

    });

});