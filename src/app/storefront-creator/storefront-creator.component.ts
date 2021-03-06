import { Component, OnInit } from '@angular/core';
import { StorefrontUnfinished } from '../storefront-unfinished';
import { Router, ActivatedRoute } from '@angular/router';
import { StorefrontProduct } from '../storefront-product';
import LZString from 'lz-string';


import { NgWizardConfig, THEME, StepChangedArgs, NgWizardService } from 'ng-wizard';


@Component({
  selector: 'app-storefront-creator',
  templateUrl: './storefront-creator.component.html',
  styleUrls: ['./storefront-creator.component.scss']
})
export class StorefrontCreatorComponent implements OnInit {
  storefront: StorefrontUnfinished;
  encodedStorefront: object;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.storefront = {
      // clientId: "ATQRTT4mO8mygl2xXUyDdP4Bapwk7FTD-6ZUVdgE1uOOhI8dt5keSJV-tA-9sisnqsuYaeU9FyewrwNu",
      clientId: "AXYY4KXrkkXVULGPgTzFGjhtmdgi2zBXDxT6pZjbPovcrSXquirarADQ6lUvmb1uMlcq92L7Xda3QgV8",
      readOnly: false,
      products: [],
      address: {
        address_line_1: '',
        address_line_2: '',
        admin_area_2: '',
        admin_area_1: '',
        postal_code: '',
        country_code: ''
      }
    }
    this.encodedStorefront = this.getQueryParamsForStore(this.storefront);
  }
  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
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
  getQueryParamsForStore(storefront: StorefrontUnfinished) {
    let newParams = { s: LZString.compressToEncodedURIComponent(JSON.stringify(storefront)) };
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: newParams,
        queryParamsHandling: 'merge'
      });
    return newParams;
  }
  ngOnInit(): void {
    console.log("StorefrontCreatorComponent", this.storefront)
  }
}
