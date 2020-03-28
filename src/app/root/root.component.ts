import { Component, OnInit } from '@angular/core';
import { Storefront } from '../storefront';
// import { StorefrontProduct } from '../storefront-product';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import LZString from 'lz-string';
import { StorefrontProduct } from '../storefront-product';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  storefront: Storefront;

  constructor(private route: ActivatedRoute) {
    let storefrontEncoded = this.route.queryParamMap.pipe(
      map(params => params.get('s') || undefined )
    );
    storefrontEncoded.subscribe(encoded => {

      this.storefront = JSON.parse(LZString.decompressFromEncodedURIComponent(encoded));
      this.storefront.products.map((p: StorefrontProduct) => p.quantity = 0)

      var PAYPAL_SCRIPT = 'https://www.paypal.com/sdk/js?client-id=' +  this.storefront.clientId;
      var script = document.createElement('script');
      var theStorefrontThis = this;
      script.onload = loaded => {
        paypal.Buttons({
          createOrder: function(data, actions) {
            console.log("Storefront: ", theStorefrontThis.storefront)
            let units = [];
            theStorefrontThis.storefront.products.forEach(product => {
              units.push({
                    quantity: 1,
                    value: product.price + ".00",
                    name: product.name ,
                    unit_amount: product.price * product.quantity,
                    category: "PHYSICAL_GOODS"
              })

            })
            return actions.order.create({
              currency_code: "USD",
              purchase_units: units
            })
          }
        }).render('#paypal-button-container');
      }
      script.setAttribute('src', PAYPAL_SCRIPT);
      document.head.appendChild(script);
    })
  }
  ngOnInit(): void {

  }

}
