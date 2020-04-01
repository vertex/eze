import { Component, OnInit } from '@angular/core';
import { Storefront } from '../storefront';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import LZString from 'lz-string';
import { StorefrontProduct } from '../storefront-product';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.scss']
})
export class StorefrontComponent implements OnInit {
  storefront: Storefront;

  constructor(private route: ActivatedRoute) {
    let storefrontEncoded = this.route.queryParamMap.pipe(
      map(params => params.get('s') || undefined )
    );
    storefrontEncoded.subscribe(encoded => {

      this.storefront = JSON.parse(LZString.decompressFromEncodedURIComponent(encoded));
      this.storefront.products.map((p: StorefrontProduct) => p.quantity = 0)

      var PAYPAL_SCRIPT = 'https://www.paypal.com/sdk/js?debug=true&client-id=' +  this.storefront.clientId;
      var script = document.createElement('script');
      var theStorefrontThis = this;
      script.onload = loaded => {
        paypal.Buttons({
          createOrder: function(data, actions) {
            console.log("Storefront: ", theStorefrontThis.storefront)
            let items = [];
            let total = 0;
            theStorefrontThis.storefront.products.forEach(product => {
              if (product.quantity && product.quantity > 0) {
                // Intent to buy the product
                total += (product.price * product.quantity)
                items.push({
                  quantity: product.quantity || 1,
                  // value: product.price + '.00',
                  name: product.name ,
                  unit_amount: {value: product.price + '.00', currency_code: 'USD'}
                })
              }
            })
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: total.toString(),
                  currency_code: 'USD',
                  breakdown: {
                    item_total: { currency_code: 'USD', value: total.toString() } //+ '.00'
                  },
                  shipping: {
                    type: 'PICKUP'
                  },
                  shipping_detail: {
                    name: {
                      full_name: "S2S " + theStorefrontThis.storefront.name
                    },
                    address_portable: theStorefrontThis.storefront.address
                  }
                },
                items: items,
              }]
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
