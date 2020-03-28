export class StorefrontProduct {
    name: string;
    quantity?: number;
    price: number;
    constructor(name: string, price: number, quantity?: number) {
        if( name ) this.name = name;
        if( price ) this.price = price;
        if( quantity ) this.quantity = quantity;
    }

}
