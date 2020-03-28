export class StorefrontProduct {
    name: string;
    quantity?: number;
    constructor(name: string, quantity?: number) {
        if( name ) this.name = name;
        if( quantity ) this.quantity = quantity;
    }

}
