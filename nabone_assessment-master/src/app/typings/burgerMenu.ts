module nabone.burger {

    export interface IMenu
    {
        menu: IBurger[];
    }

    export interface IBurger
    {
        title: string;
        price: number;
        elements: string[]; //Possible values: 'BUN', 'BACON', 'CHEESE', 'TOMATO', 'LETTUCE'
    }

}