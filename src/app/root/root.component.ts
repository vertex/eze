import { Component, OnInit } from '@angular/core';
import { Storefront } from '../storefront';
// import { StorefrontProduct } from '../storefront-product';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import LZString from 'lz-string';


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
      this.storefront = JSON.parse(LZString.decompressFromBase64(encoded));
    })
  }
  ngOnInit(): void {

  }

}
