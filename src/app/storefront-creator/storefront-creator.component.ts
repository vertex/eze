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
  constructor() {
    this.storefront = { clientId: "test", products: [
      new StorefrontProduct("a")
    ]}
  }
  updateProduct(product: StorefrontProduct, name: string) {
    console.log("updateProduct", product, name)
    product.name = name;
    console.log(this.storefront)
  }
  addProduct() {
    this.storefront.products.push(new StorefrontProduct(""))
  }
  getUrl() {
    console.log("http://localhost:4200/?s=" + encodeURIComponent(LZString.compressToBase64(JSON.stringify(this.storefront))))
  }

  ngOnInit(): void {
    console.log("StorefrontCreatorComponent", this.storefront)
  }

}
