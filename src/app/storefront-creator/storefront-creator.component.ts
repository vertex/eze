import { Component, OnInit } from '@angular/core';
import { Storefront } from '../storefront';
import { StorefrontProduct } from '../storefront-product';
import LZString from 'lz-string';
@Component({
  selector: 'app-storefront-creator',
  templateUrl: './storefront-creator.component.html',
  styleUrls: ['./storefront-creator.component.scss']
})
export class StorefrontCreatorComponent implements OnInit {
  storefront: Storefront;
  encodedStorefront: object;
  constructor() {
    this.storefront = {
      clientId: "ATQRTT4mO8mygl2xXUyDdP4Bapwk7FTD-6ZUVdgE1uOOhI8dt5keSJV-tA-9sisnqsuYaeU9FyewrwNu",
      name: "",
      products: [
        new StorefrontProduct("a", 0)
      ]}
    this.encodedStorefront = this.getQueryParamsForStore(this.storefront);
  }
  updateProduct(product: StorefrontProduct, name: string, price: number) {
    product.name = name;
    product.price = price;
    this.encodedStorefront = this.getQueryParamsForStore(this.storefront);
  }
  addProduct() {
    this.storefront.products.push(new StorefrontProduct("", 0))
    this.encodedStorefront = this.getQueryParamsForStore(this.storefront);
  }
  removeProduct(index: number) {
    this.storefront.products.splice(index, 1)
    this.encodedStorefront = this.getQueryParamsForStore(this.storefront);
  }
  getQueryParamsForStore(storefront: Storefront) {
    return { s: LZString.compressToEncodedURIComponent(JSON.stringify(storefront)) };
  }
  ngOnInit(): void {
    console.log("StorefrontCreatorComponent", this.storefront)
  }
}
